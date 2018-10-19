'use strict';

const models = require('../../models/db');
const ResourceNotFoundError = require('../../errors/ResourceNotFoundError');

exports.findAll = (req, res, next) => {
  models.subject.findAll()
    .then(subjects => {
      res.json(subjects);
    })
    .catch(next);
}

exports.findById = (req, res, next) => {
  let id = req.params.id;
  models.subject.findById(id, {
    include: [
      { model: models.major, as: 'Majors' },
      { model: models.student, as: 'Students' }
    ]
  })
    .then(subject => {
      if (subject) {
        res.json(subject);
      } else {
        throw new ResourceNotFoundError('subject', id);
      }
    })
    .catch(next);
}

exports.create = (req, res, next) => {
  models.subject.create(req.body)
    .then(subject => {
      res.status(201).json(subject);
    })
    .catch(next);
}

exports.update = (req, res, next) => {
  let id = req.params.id;
  models.subject.update(
    req.body,
    { where: { id: id } }
  )
    .then(affectedCount => {
      if (affectedCount[0]) {
        res.sendStatus(204);
      } else {
        throw new ResourceNotFoundError('subject', id);
      }
    })
    .catch(next);
}

exports.delete = (req, res, next) => {
  let id = req.params.id;
  models.subject.destroy(
    { where: { id: id } }
  )
    .then(affectedCount => {
      if (affectedCount) {
        res.sendStatus(204);
      } else {
        throw new ResourceNotFoundError('subject', id);
      }
    })
    .catch(next);
}
