'use strict';

const models = require('../db');
const studentsJSON = require('./students.json');
const majorsJSON = require('./majors.json');
const subjectsJSON = require('./subjects.json');

module.exports = {
    insert: () => {
        models.student.bulkCreate(studentsJSON);
        models.major.bulkCreate(majorsJSON);
        models.subject.bulkCreate(subjectsJSON);
    }

    // TODO add join tables data
}