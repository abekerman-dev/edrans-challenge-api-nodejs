'use strict';

const models = require('../db');
const _STUDENTS = require('./students.json');

module.exports = {
    insert: () => {
        models.Student.bulkCreate(_STUDENTS)
    }
}