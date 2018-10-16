'use strict'

const models = require('../../models/db');

exports.findAllStudents = (req, res) => {
  models.Student.findAll()
    .then(students => {
      res.json(students);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
}

exports.findSingleStudent = (req, res) => {
  models.Student.findById(req.params.id)
    .then(student => {
      res.json(student);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
}
