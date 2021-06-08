import "../../styles.css"
import { useState } from "react"
import { useTodo } from "../../context/TodoContext";
import { useParams } from "react-router";
import { todoLists } from "../../data/todoListData";

export const TodoListDetails = () => {
    const { todoId } = useParams();
    const currentTodoList = todoLists.find(todoList => todoList.id === parseInt(todoId))
    console.log(currentTodoList)

    const [newTask, setNewTask] = useState("");
    const { todoList, setTodoList } = useTodo();

    const addNewTask = (currentTodoList) => {
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
            {/* <h1> Todo </h1>
            <input type="text" placeholder="Add a Task" className="todoInput" onChange={(e) => setNewTask(e.target.value)} />
            <button className="todoButton" onClick={() => addNewTask()}> Add </button>

            {currentTodoList.map(todo => (
                <div>
                    <label>
                        <span className={todo.isDone ? "txt-strike" : ""}> {todo.task} </span>
                        
                    </label>
                </div>
            ))} */}

            <h1> {currentTodoList?.todoListName} </h1>
            <p>{!currentTodoList && "Todolist could not be found"}</p>
            <p className="mg-t-05"> No. of tasks : {currentTodoList?.tasks.length} </p>

            <input type="text" placeholder="Add a Task" className="todoInput mg-b-2 mg-t-1" onChange={(e) => setNewTask(e.target.value)} />
            <button className="pd-05 bdr-none bdr-rad-m fill-secondary-red mg-l-2" onClick={() => addNewTask()}> Add </button>

            
            {currentTodoList.tasks.map(task => ( 
                <div className="flex flex-space-between card-w-20 mg-1 pd-1 bdr-thin">
                    <p>{task.task}</p>
                    <button className="pd-05 bdr-none bdr-rad-m fill-secondary-blue" onClick={() => updateTask(task.task)}> Mark as Done </button>
                </div>
            ))}
        </div>
    </>)
}