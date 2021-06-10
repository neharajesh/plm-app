import axios from "axios";
import ROOT_URL from "../config";

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