const controller = require('./student.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.findAllStudents);
router.get('/:id', controller.findSingleStudent);
router.post('/', controller.createStudent);
router.put('/:id', controller.updateStudent);
router.delete('/:id', controller.deleteStudent);

module.exports = router;