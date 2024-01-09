const express = require('express');
const router = express.Router();
const { getTasks, createTask, getTaskByKey } = require('../controller/task');

router.get('/', getTasks);
router.get('/:id', getTaskByKey);
router.post('/', createTask);

module.exports = router;