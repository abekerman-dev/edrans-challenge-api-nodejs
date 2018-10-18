'use strict';

const models = require('../../models/db');
const ResourceNotFoundError = require('../../errors/ResourceNotFoundError');

exports.findAll = (req, res, next) => {
  models.student.findAll({
    include: [models.major]
  })
  .then(students => {
    res.json(students);
  }).catch(next);
}

exports.findOne = (req, res, next) => {
  let id = req.params.id;
  models.student.findById(id)
    .then(student => {
      if (student) {
        res.json(student);
      } else {
        throw new ResourceNotFoundError('student', id);
      }
    }).catch(next);
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