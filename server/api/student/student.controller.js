'use strict';

const models = require('../../models/db');

exports.findAllStudents = (req, res) => {
  models.Student.findAll()
    .then(students => {
      res.json(students);
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}

exports.findSingleStudent = (req, res) => {
  models.Student.findById(req.params.id)
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

exports.createStudent = (req, res) => {
  models.Student.create(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      console.error(error);
      res.status(404).send(error);
    })
}

exports.updateStudent = (req, res) => {
  models.Student.update(
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

exports.deleteStudent = (req, res) => {
  models.Student.destroy(
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