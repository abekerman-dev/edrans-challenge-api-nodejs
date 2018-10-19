const controller = require('./subject.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.put('/:id/student/:studentId', controller.finishTerm);

module.exports = router;