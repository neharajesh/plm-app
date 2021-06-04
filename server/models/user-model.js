const mongoose = require("mongoose")
const { Todo } = require("./todo-model")
const { Schema } = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    todoLists: [{
        type: Schema.Types.ObjectId,
        ref: Todo
    }]
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema)

module.exports = { User }