const controller = require('./student.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.findAllStudents);
router.get('/:id', controller.findSingleStudent);

module.exports = router;