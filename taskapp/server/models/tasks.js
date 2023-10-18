const mongoose = require('mongoose');
const { Schema } = mongoose;

const TasksSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    dueDate: {
        type: Date,
        default: Date.now
    }, 
    isCompleted: {
        type: Boolean,
        default: false
    }
})

const Tasks = mongoose.model('tasks', TasksSchema);

exports.Tasks = Tasks;


