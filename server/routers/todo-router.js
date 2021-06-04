const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const lodash = require("lodash")
const {extend} = lodash

const { Todo } = require("../models/todo-model")

router.route("/")
.get(async(req, res) => {
    try {
        const user = req.user
        const todos = await Todo.find({userId: user._id})
        res.json({success: true, message: "Todos retrieved successfully", receivedData: todos})
    } catch (err) {
        res.json({success: false, message: "Todos could not be retrieved", errMessage: err.message})
    }
})
.post(async(req, res) => {
    try {
        const user = req.user
        const todo = req.body
        const newTodo = new Todo(todo)
        const savedTodo = await newTodo.save()
        req.json({success: true, message: "Todo saved successfully", sentData: savedTodo})
    } catch (err) {
        res.json({success: false, message: "Todo could not be saved", errMessage: err.message})
    }
})

module.exports = router