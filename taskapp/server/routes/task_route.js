const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createTasks,
    getSignleTask,
    updateTask,
    deleteTask 
}  = require('../controller/task_controller');


router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getSignleTask).patch(updateTask).delete(deleteTask);


module.exports = router;