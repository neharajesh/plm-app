const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const lodash = require("lodash")
const {extend} = lodash

const { Todo } = require("../models/todo-model")

router.route("/")
//view all todos
.get(async(req, res) => {
    try {
        const todos = await Todo.find({})
        res.json({success: true, message: "Todos retrieved successfully", receivedData: todos})
    } catch (err) {
        res.json({success: false, message: "Todos could not be retrieved", errMessage: err.message})
    }
})
//add new todo
.post(async(req, res) => {
    try {
        const user = req.user
        const todo = req.body
        const newTodo = new Todo(todo)
        const savedTodo = await newTodo.save()
        res.json({success: true, message: "Todo saved successfully", sentData: savedTodo})
    } catch (err) {
        res.json({success: false, message: "Todo could not be saved", errMessage: err.message})
    }
})

router.param("todoId", async(req, res, next, todoId) => {
    try {
        const todo = await Todo.findById(todoId);
        if(!todo) {
            console.log("This todo does not exist, todoId =>", todoId)
            return res.json({success: false, message: "Todo could not be found", data: []})
        }
        req.todo = todo
        next()
    } catch (err) {
        console.log("Error occurred while trying to fetch todo details")
        res.json({success: false, message: "Error while fetching todo details", errMessage: err.message})
    }
})

router.route("/:todoId")
//view particular todo
.get((req, res) => {
    let { todo } = req
    res.json({success: true, message: "Todo details fetched successfully", sentData: todo})
})
//update particular todo
.post(async(req, res) => {
    try {
        let { todo } = req
        let todoUpdates = req.body
        todo = extend(todo, todoUpdates)
        todo = await todo.save()
        res.json({success: true, message: "Todo details updated successfully", receivedData: todo})
    } catch (err) {
        console.log("Error occurred while trying to update todo details")
        res.json({success: false, message: "Error updating todo details", errMessage: err.message})
    }
})
//delete particular todo
.delete(async(req, res) => {
    try {
        let { todo } = req
        await todo.remove()
        res.json({success: true, message: "Todo successfully deleted", sentData: todo})
    } catch (err) {
        console.log("Error occurred while deleteing todo")
        res.json({success: false, message: "Todo could not be deleted", errMessage: err.message})
    }
})

//get all todos with userId
router.route("/user/:userId")
.get(async(req, res) => {
    try {
        const todos = await Todo.find({userId: req.params.userId})
        if(!todos) {
            return res.json({success: false, message: "No todos found"})
        }
        return res.json({success: true, message: "Todos found", data: todos})
    } catch (err) {
        console.log("Error fetching todos")
        res.json({success: false, message: "Couldn't fetch todos", errMessage: err.message})
    }
})

module.exports = router