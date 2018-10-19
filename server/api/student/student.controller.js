'use strict';

const models = require('../../models/db');
const ResourceNotFoundError = require('../../errors/ResourceNotFoundError');
const BadRequestError = require('../../errors/BadRequestError');

exports.findAll = (req, res, next) => {
  models.student.findAll({
    include: [models.major]
  })
  .then(students => {
    res.json(students);
  })
  .catch(next);
}

exports.findById = (req, res, next) => {
  let id = req.params.id;
  models.student.findById(id)
    .then(student => {
      if (student) {
        res.json(student);
      } else {
        throw new ResourceNotFoundError('student', id);
      }
    })
    .catch(next);
}

exports.create = (req, res, next) => {
  models.student.create(req.body)
  .then(user => {
    res.status(201).json(user);
  })
  .catch(next);
}

exports.update = (req, res, next) => {
  let id = req.params.id;
  models.student.update(
    req.body,
    { where: { id: id } }
  )
    .then(affectedCount => {
      if (affectedCount[0]) {
        res.sendStatus(204);
      } else {
        throw new ResourceNotFoundError('student', id);
      }
    })
    .catch(next);
}

exports.delete = (req, res, next) => {
  let id = req.params.id;
  models.student.destroy(
    { where: { id: id } }
  )
    .then(affectedCount => {
      if (affectedCount) {
        res.sendStatus(204);
      } else {
        throw new ResourceNotFoundError('student', id);
      }
    })
    .catch(next);
}

exports.signUpForSubject = (req, res, next) => {
  let studentId = req.params.id;
  let subjectId = req.params.subjectId;
  models.student.findById(studentId)
    .then(student => {
      if (student) {
        models.subject.findOne({
          where: { id: subjectId }
        })
          .then(subject => {
            if (!subject) {
              throw new ResourceNotFoundError('subject', subjectId);
            } else {
              subject.getMajors()
                .then(majors => {
                  var found = false;
                  majors.forEach(major => {
                    found = found || (major.id === student.major_id);
                  });
                  if (!found) {
                    throw new BadRequestError('subject with id ' + subjectId + ' does not belong to student\'s major');
                  } else {
                    student.addSubject(subjectId)
                      .then(() => {
                        res.sendStatus(204);
                      })
                      .catch((err) => {
                        res
                          .status(400)
                          .send(
                            { error: 'entry for (student, subject) already exists in join table' }
                          )
                      })
                  }
                })
                .catch(next);
            } 
          })
          .catch(next);
      } else {
        throw new ResourceNotFoundError('student', studentId);
      }
    })
    .catch(next);

}