import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllTodoLists } from "../api/TodoApi";

const initialTodoList = JSON.parse(localStorage.getItem("cart")) || [];

const TodoContext = createContext()

export const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState(initialTodoList)

    const fetchTodoLists = async() => {
        const response = await fetchAllTodoLists();
        console.log(response)
        localStorage.setItem("todoLists", JSON.stringify(response))
        setTodoList(response)
    }

    useEffect(() => {
        fetchTodoLists();
    }, [setTodoList])

    return(<>
        <TodoContext.Provider value={{ todoList, setTodoList }}>
            {children}
        </TodoContext.Provider>
    </>)
}

export const useTodo = () => {  
    return useContext(TodoContext)
}