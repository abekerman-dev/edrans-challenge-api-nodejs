'use strict';

const models = require('../../models/db');
const ResourceNotFoundError = require('../../errors/ResourceNotFoundError');

exports.findAll = (req, res, next) => {
  models.major.findAll()
    .then(majors => {
      res.json(majors);
    })
    .catch(next);
}

exports.findOne = (req, res, next) => {
  let id = req.params.id;
  models.major.findById(id)
    .then(major => {
      if (major) {
        res.json(major);
      } else {
        throw new ResourceNotFoundError('major', id);
      }
    })
    .catch(next);
}

exports.create = (req, res, next) => {
  models.major.create(req.body)
    .then(major => {
      res.status(201).json(major);
    })
    .catch(next);
}

exports.update = (req, res, next) => {
  let id = req.params.id;
  models.major.update(
    req.body,
    { where: { id: id } }
  )
    .then(affectedCount => {
      if (affectedCount[0]) {
        res.sendStatus(204);
      } else {
        throw new ResourceNotFoundError('major', id);
      }
    })
    .catch(next);
}

exports.delete = (req, res, next) => {
  let id = req.params.id;
  models.major.destroy(
    { where: { id: id } }
  )
    .then(affectedCount => {
      if (affectedCount) {
        res.sendStatus(204);
      } else {
        throw new ResourceNotFoundError('major', id);
      }
    })
    .catch(next);
}
