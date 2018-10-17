'use strict';

const models = require('../db');
const _STUDENTS = require('./students.json');
const _MAJORS = require('./majors.json');
const _SUBJECTS = require('./subjects.json');

module.exports = {
    insert: () => {
        models.Student.bulkCreate(_STUDENTS);
        models.Major.bulkCreate(_MAJORS);
        models.Subject.bulkCreate(_SUBJECTS)
    }
}