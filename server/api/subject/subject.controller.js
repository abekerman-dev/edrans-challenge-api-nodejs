'use strict';

const models = require('../../models/db');

exports.findAll = (req, res) => {
  models.subject.findAll()
    .then(subjects => {
      res.json(subjects);
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}

exports.findOne = (req, res) => {
  models.subject.findById(req.params.id)
    .then(subject => {
      if (subject) {
        res.json(subject);
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
  models.subject.create(req.body)
    .then(subject => {
      res.status(201).json(subject);
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}

exports.update = (req, res) => {
  models.subject.update(
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
  models.subject.destroy(
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