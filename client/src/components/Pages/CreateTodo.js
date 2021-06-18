import { useState } from "react";
import { createNewTodoList } from "../../api/TodoApi";
import { useAuth } from "../../context/AuthContext"
import "../../styles.css"

export const CreateTodo = () => {
    const { user } = useAuth();
    const [ todoListName, setTodoListName ] = useState("");
    const [ tasks, setTasks ] = useState([])
    const [ taskText, setTaskText ] = useState("")

    const addNewTask = () => {
        const newTask = {
            task: taskText,
            isDone: false
        }
        tasks.push(newTask)
    }

    const saveTodoList = async() => {
        const todoList = {
            userId: "123123123123",
            todoListName: todoListName,
            tasks: tasks
        }
        const response = await createNewTodoList(todoList)
    }

    return (<>
        <h1> Create New Todo </h1>
        <div>
            <div>
                <p> TodoList Title </p>
                <input type="text" onChange={e => setTodoListName(e.target.value)} />
            </div>
            <div>
                <p> Add Task </p>
                <input type="text" onChange={e => setTaskText(e.target.value)} />
                <button onClick={() => addNewTask()}> Add </button>
            </div>
        </div>
        <div>
            {tasks.map(task => <div>
                <p> {task.task} </p>
            </div>)}
        </div>
        <button onClick={() => saveTodoList()}> Save </button>
    </>)
}