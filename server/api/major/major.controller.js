'use strict';

const models = require('../../models/db');

exports.findAll = (req, res) => {
  models.major.findAll()
    .then(majors => {
      res.json(majors);
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}

exports.findOne = (req, res) => {
  models.major.findById(req.params.id)
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
  models.major.create(req.body)
    .then(major => {
      res.status(201).json(major);
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}

exports.update = (req, res) => {
  models.major.update(
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
  models.major.destroy(
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