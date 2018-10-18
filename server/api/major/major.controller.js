'use strict';

const models = require('../../models/db');
const ResourceNotFoundError = require('../../errors/ResourceNotFoundError');

exports.findAll = (req, res, next) => {
  models.major.findAll()
    .then(majors => {
      res.json(majors);
    }).catch(next);
}

exports.findOne = (req, res, next) => {
  models.major.findById(req.params.id)
    .then(major => {
      if (major) {
        res.json(major);
      } else {
        throw new ResourceNotFoundError("major id not found");
      }
    }).catch(next);
}

exports.create = (req, res) => {
  models.major.create(req.body)
    .then(major => {
      res.status(201).json(major);
    }).catch(next);
}

exports.update = (req, res, next) => {
  models.major.update(
    req.body,
    { where: { id: req.params.id } }
  )
    .then(affectedCount => {
      console.log('affectedCount', affectedCount);
      if (affectedCount[0]) {
        res.sendStatus(204);
      } else {
        throw new ResourceNotFoundError("major id not found");
      }
    }).catch(next);
}

exports.delete = (req, res, next) => {
  models.major.destroy(
    { where: { id: req.params.id } }
  )
    .then(affectedCount => {
      if (affectedCount) {
        res.sendStatus(204);
      } else {
        throw new ResourceNotFoundError("major id not found");
      }
    }).catch(next);
}
