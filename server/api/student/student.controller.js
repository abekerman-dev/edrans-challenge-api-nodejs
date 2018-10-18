'use strict';

const models = require('../../models/db');

exports.findAll = (req, res) => {
  models.student.findAll({
    include: [models.major]
  })
  .then(students => {
    res.json(students);
  })
  .catch(error => {
    console.error(error);
    res.status(404).send(error);
  })
}

exports.findOne = (req, res) => {
  models.student.findById(req.params.id)
    .then(student => {
      if (student) {
        res.json(student);
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
  models.student.create(req.body)
  .then(user => {
    res.status(201).json(user);
  })
  .catch(error => {
    console.error(error);
    res.status(404).send(error);
  })
}

exports.update = (req, res) => {
  models.student.update(
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
  models.student.destroy(
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