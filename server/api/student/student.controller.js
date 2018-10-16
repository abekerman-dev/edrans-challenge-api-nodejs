'use strict';

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

exports.createStudent = (req, res) => {
  models.Student.create(req.body)
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
}

exports.updateStudent = (req, res) => {
  models.Student.update(
    req.body,
    { where: { id: req.params.id } }
  )
    .then(affectedRows => {
      res.json(affectedRows);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
}

exports.deleteStudent = (req, res) => {
  models.Student.destroy(
    { where: { id: req.params.id } }
  )
    .then(affectedRows => {
      res.json(affectedRows);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
}