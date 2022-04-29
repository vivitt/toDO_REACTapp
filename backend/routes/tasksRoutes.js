const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');


router.get('/', tasksController.getAllTheTasks);
router.post('/', tasksController.createNewTask);
router.post('/clearall', tasksController.emptyList);
router.post('/remove/:id', tasksController.removeOneTask);

//TODO*******************************//
//router.put('/', tasksController.setCompleted);


module.exports = router;