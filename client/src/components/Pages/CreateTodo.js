import { useState } from "react";
import { createNewTodoList } from "../../api/TodoApi";
import { showNotification } from "../Utilities/toast"
import "../../styles.css"
import { useAuth } from "../../context/AuthContext"
import { useTodo } from "../../context/TodoContext";

export const CreateTodo = () => {
    const { user } = useAuth();
    const { setTodoList } = useTodo();
    const [ todoListName, setTodoListName ] = useState("");
    const [ tasks, setTasks ] = useState([])
    const [ taskText, setTaskText ] = useState("")

    const addNewTask = () => {
        const newTask = {
            task: taskText,
            isDone: false
        }
        setTasks(tasks => [...tasks, newTask])
    }

    const saveTodoList = async() => {
        console.log(user)
        const todoList = {
            userId: user._id,
            todoListName: todoListName,
            tasks: tasks
        }
        setTodoList(todoLists => [...todoLists, todoList])
        const response = await createNewTodoList(todoList)
        console.log(response)
        showNotification("Added todo list")
    }

    return (<>
        <h1 className="mg-b-2"> Create New Todo </h1>
        <div>
            <div className="flex mg-tb-05 flex-items-center">
                <p> Todo List Title </p>
                <input className="todoInput mg-l-1" type="text" placeholder="Todo List Title" onChange={e => setTodoListName(e.target.value)} />
            </div>
            <div className="mg-t-2">
                <p className="txt-500"> Add Task </p>
                <input className="todoInput mg-b-2 mg-t-05" type="text" placeholder="Add New Task" onChange={e => setTaskText(e.target.value)} />
                <button className="pd-05 bdr-none bdr-rad-m fill-secondary-red mg-l-2" onClick={() => addNewTask()}> Add </button>
            </div>
        </div>
        <div>
            {tasks.map(task => <div className="mg-l-2">
                <li> {task.task} </li>
            </div>)}
        </div>
        <button className="mg-t-2 pd-05 bdr-none bdr-rad-m fill-secondary-red" onClick={() => saveTodoList()}> Save </button>
        <div id="notification-container"></div>
    </>)
}