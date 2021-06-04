import "../../styles.css"
import { useState } from "react"
import { updateTodoList } from "../Utilities/todo-utilities"
import { useTodo } from "../../context/TodoContext";

export const Todo = () => {
    const [newTask, setNewTask] = useState("");
    const { todoList, setTodoList } = useTodo();

    const addNewTask = () => {
        let newTodoItem = {
            task: newTask,
            isDone: false
        }
        console.log(newTodoItem)
        setTodoList(todoList => [...todoList, newTodoItem])
    }

    const updateTask = (task) => {
        let updatedTodoList = todoList.map(todo => {
            if(todo.task === task)
                todo.isDone = !todo.isDone
            return todo
        })
        setTodoList(updatedTodoList)
    }

    return (<>
        <div>
            <h1> Todo </h1>
            <input type="text" placeholder="Add a Task" className="todoInput" onChange={(e) => setNewTask(e.target.value)} />
            <button className="todoButton" onClick={() => addNewTask()}> Add </button>

            {todoList.map(todo => (
                <div>
                    <label>
                        <span className={todo.isDone ? "txt-strike" : ""}> {todo.task} </span>
                        <button onClick={() => updateTask(todo.task)}> Mark as Done </button>
                    </label>
                </div>
            ))}
        </div>
    </>)
}