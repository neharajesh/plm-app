const mongoose = require("mongoose")
const { User } = require("./user-model")
const { Schema } = mongoose

const TodoSchema = new Schema({
    task: {
        type: String,
        required: [true, "Task cannot be empty"]
    },
    isDone: {
        type: Boolean,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: User
    }
}, {
    timestamps: true
})

const Todo = mongoose.model("Todo", TodoSchema)

module.exports = { Todo }