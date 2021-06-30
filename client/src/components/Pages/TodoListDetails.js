import "../../styles.css"
import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router";
import { deleteCurrentTodoList, findCurrentTodoList, updateCurrentTodoList } from "../../api/TodoApi";
import { showNotification } from "../Utilities/toast";
import { useTodo } from "../../context/TodoContext";

export const TodoListDetails = () => {
    const { todoId } = useParams();
    const { todoList, setTodoList } = useTodo();

    const [ newTask, setNewTask ] = useState("");
    const [ currentTodo, setCurrentTodo ] = useState({})

    useEffect( () => {
        let currentTodoList = todoList.find(todo => todo._id === todoId)
        setCurrentTodo(currentTodoList)
    }, [currentTodo])

    // useEffect(() => {
    //     setTodoList(todoList.map(todoList => {
    //         if(todoList._id === todoId) {
    //             todoList = currentTodo
    //         }
    //         return todoList
    //     }))
    // }, [])

    const deleteTodoList = async () => {
        const response = await deleteCurrentTodoList(todoId)
        showNotification(response.message)
    }

    const addNewTask = async () => {
        let taskToAdd = { task: newTask, isDone: false }
        let allTasks = [...currentTodo.tasks, taskToAdd]
        let currentTodoList = {...currentTodo, tasks: allTasks}
        setCurrentTodo(currentTodoList)
        const response = await updateCurrentTodoList(todoId, currentTodoList)
        showNotification(response.message)
    }

    const markAsDone = async (taskId) => {
        currentTodo.tasks.map(task => {
            if (task._id === taskId) {
                task.isDone = !task.isDone
            }
            return task;
        })
        console.log(currentTodo)
        setCurrentTodo(currentTodo)
        const response = await updateCurrentTodoList(todoId, currentTodo)   
        console.log(response)
        showNotification("Marked as Done")
    }

    return (<>
        <div>
            {!currentTodo && <Navigate to="/todo" />}
            <h1> {currentTodo?.todoListName} </h1>

            <input type="text" placeholder="Add a Task" className="todoInput mg-b-2 mg-t-1" onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={() => addNewTask()} className="pd-05 bdr-none bdr-rad-m fill-secondary-red mg-l-2"> Add </button>
            
            <div className="flex flex-row-wrap w-100">
                {currentTodo.tasks === undefined ? <p> No Tasks </p> : 
                    currentTodo.tasks.filter(task => task.isDone === false).map(task => (
                        <div key={task._id} className="flex flex-space-between card-w-25 mg-1 pd-1 bdr-thin bdr-grey bdr-rad-m">
                        <p className={task.isDone && "txt-strike"}> {task.task} </p>
                        <button onClick={() => markAsDone(task._id)} className="pd-05 bdr-none bdr-rad-m fill-secondary-blue"> Mark as Done </button>
                    </div>
                    ))
                }
            </div>

            <button onClick={() => deleteTodoList()} className="pd-05 fill-primary-red bdr-none bdr-rad-m"> Delete Todo List </button>
        </div>
        <div id="notification-container"></div>
    </>)
}