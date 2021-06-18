import axios from "axios";
import ROOT_URL from "../config";

export const createNewTodoList = async(todoList) => {
    try {
        const response = await axios.post(`${ROOT_URL}/todo`, todoList, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        console.log(response.data)
    } catch (err) {
        console.log("Error creating new todolist")
    }
}

export const findCurrentTodoList = async(todoId) => {
    try {
        const response = await axios.get(`${ROOT_URL}/todo/${todoId}`)
        const data = response.data.sentData
        console.log(data)
        return data
    } catch (err) {
        console.log("Error finding current todolist")
    }
}

export const deleteCurrentTodoList = async(todoId) => {
    try {
        const response = await axios.delete(`${ROOT_URL}/todo/${todoId}`)
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log("Error deleting current todoList")
    }
}

export const updateCurrentTodoList = async(todoId, updatedTodo) => {
    try {
        const response = await axios.post(`${ROOT_URL}/todo/${todoId}`, updatedTodo, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        })
        return response.data
    } catch (err) {
        console.log("Error updating todolist")
    }
}