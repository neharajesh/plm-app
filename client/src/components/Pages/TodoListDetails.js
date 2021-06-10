import "../../styles.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { deleteCurrentTodoList, findCurrentTodoList } from "../../api/TodoApi";
import { showNotification } from "../Utilities/toast";

export const TodoListDetails = () => {
    const { todoId } = useParams();
    const [ currentTodo, setCurrentTodo ] = useState({})

    const loadTodoLists = async() => {
        const response = await findCurrentTodoList(todoId)
        console.log(response)
        setCurrentTodo(response)
    }

    useEffect(() => {
        loadTodoLists();
    }, [])

    const deleteTodoList = async () => {
        const response = await deleteCurrentTodoList(todoId)
        showNotification(response.message)
    }

    return (<>
        <div>
            <h1> {currentTodo?.todoListName} </h1>
            <p>{!currentTodo && "Todolist could not be found"}</p>
            <p> {currentTodo.tasks && "We have tasks"} </p>
            {/* <p className="mg-t-05"> No. of tasks : {currentTodo?.tasks.length} </p> */}

            <input type="text" placeholder="Add a Task" className="todoInput mg-b-2 mg-t-1" />
            <button className="pd-05 bdr-none bdr-rad-m fill-secondary-red mg-l-2"> Add </button>
            
            {currentTodo.tasks === undefined ? <p> No Tasks </p> : currentTodo.tasks.map(task => ( 
                <div key={task._id} className="flex flex-space-between card-w-20 mg-1 pd-1 bdr-thin">
                    <p>{task.task}</p>
                    <button className="pd-05 bdr-none bdr-rad-m fill-secondary-blue"> Mark as Done </button>
                </div>
            ))}

            <button onClick={() => deleteTodoList()} className="pd-05 fill-primary-red bdr-none bdr-rad-m"> Delete Todo List </button>
        </div>
        <div id="notification-container"></div>
    </>)
}