'use strict';

const models = require('../../models/db');

exports.findAll = (req, res) => {
  models.Major.findAll()
    .then(majors => {
      res.json(majors);
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}

exports.findOne = (req, res) => {
  models.Major.findById(req.params.id)
    .then(major => {
      if (major) {
        res.json(major);
      } else {
        throw {
          error: "input id not found"
        };
      }
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}

exports.create = (req, res) => {
  models.Major.create(req.body)
    .then(major => {
      res.status(201).json(major);
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}

exports.update = (req, res) => {
  models.Major.update(
    req.body,
    { where: { id: req.params.id } }
  )
    .then(affectedCount => {
      if (affectedCount[0]) {
        res.sendStatus(204);
      } else {
        throw {
          error: "input id not found"
        };
      }
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}

exports.delete = (req, res) => {
  models.Major.destroy(
    { where: { id: req.params.id } }
  )
    .then(affectedCount => {
      if (affectedCount) {
        res.sendStatus(204);
      } else {
        throw {
          error: "input id not found"
        };
      }
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}