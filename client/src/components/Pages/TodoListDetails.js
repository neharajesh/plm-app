import "../../styles.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { deleteCurrentTodoList, findCurrentTodoList, updateCurrentTodoList } from "../../api/TodoApi";
import { showNotification } from "../Utilities/toast";
import { useTodo } from "../../context/TodoContext";

export const TodoListDetails = () => {
    const { todoId } = useParams();
    const { todoList, setTodoList } = useTodo();
    const [ currentTodo, setCurrentTodo ] = useState({})
    const [ newTask, setNewTask ] = useState("");

    const loadTodoList = async() => {
        const response = await findCurrentTodoList(todoId)
        console.log(response)
        setCurrentTodo(response)
    }

    const deleteTodoList = async () => {
        const response = await deleteCurrentTodoList(todoId)
        showNotification(response.message)
    }

    const addNewTask = async () => {
        let taskUpdates = {
            task: newTask,
            isDone: false
        }
        let todoUpdates = { ...currentTodo, tasks: [...currentTodo.tasks, taskUpdates]}
        const response = await updateCurrentTodoList(todoId, todoUpdates)
        setCurrentTodo(response.data)
        showNotification(response.message)
    }

    const markAsDone = async (taskId) => {
        currentTodo.tasks.map(task => {
            if(task._id === taskId) {
                task.isDone = !task.isDone
            }
            return task;
        })
        const response = await updateCurrentTodoList(todoId, currentTodo)
        setCurrentTodo(response.data)
        showNotification(response.message)
    }

    const updateAllLists = () => {
        todoList.map(todo => {
            if(todo._id === todoId) {
                todo = currentTodo
            }
            return todo;
        })
        setTodoList(todoList)
    }
    useEffect(() => {
        updateAllLists()
        loadTodoList()
    }, [currentTodo, setCurrentTodo])

    return (<>
        <div>
            <h1> {currentTodo?.todoListName} </h1>
            <p>{!currentTodo && "Todolist could not be found"}</p>
            {/* <p className="mg-t-05"> No. of tasks : {currentTodo.tasks.length()} </p> */}

            <input type="text" placeholder="Add a Task" className="todoInput mg-b-2 mg-t-1" onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={() => addNewTask()} className="pd-05 bdr-none bdr-rad-m fill-secondary-red mg-l-2"> Add </button>
            
            {currentTodo.tasks === undefined ? <p> No Tasks </p> : currentTodo.tasks.map(task => ( 
                <div key={task._id} className="flex flex-space-between card-w-20 mg-1 pd-1 bdr-thin">
                    <p className={task.isDone ? "txt-strike" : ""}>{task.task}</p>
                    <button onClick={() => markAsDone(task._id)} className="pd-05 bdr-none bdr-rad-m fill-secondary-blue"> Mark as Done </button>
                </div>
            ))}

            <button onClick={() => deleteTodoList()} className="pd-05 fill-primary-red bdr-none bdr-rad-m"> Delete Todo List </button>
        </div>
        <div id="notification-container"></div>
    </>)
}