const mongoose = require("mongoose")
const { Schema } = mongoose

const TodoSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    todoListName: {
        type: String
    }, 
    tasks: [{
        task: {
            type: String,
            required: [true, "Task is required"]
        }, 
        isDone: {
            type: Boolean,
            required: true
        }
    }]
}, {
    timestamps: true
})

const Todo = mongoose.model("Todo", TodoSchema)

module.exports = { Todo }