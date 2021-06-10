import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import ROOT_URL from "../config";

const initialTodoList = localStorage.getItem("todoLists") || [];

const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState(initialTodoList)

    useEffect(async() => {
        const response = await axios.get(`${ROOT_URL}/todo`)
        localStorage.setItem("todoLists", response.data?.receivedData)
        setTodoList(response.data?.receivedData)
        },
    [])

    return(<>
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            {children}
        </TodoContext.Provider>
    </>)
}

export const useTodo = () => {
    return useContext(TodoContext)
}