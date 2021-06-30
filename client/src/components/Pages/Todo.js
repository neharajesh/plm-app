import "../../styles.css"
import { Link } from "react-router-dom"
import { useTodo } from "../../context/TodoContext"
import { useEffect } from "react";
import { fetchAllTodoLists } from "../../api/TodoApi";

export const Todo = () => {
    const { todoList, setTodoList } = useTodo();

    useEffect(async() => {
        const response = await fetchAllTodoLists();
        console.log(response)
        setTodoList(response)
    }, [])

    return (<>
    <h1 className="mg-b-2"> Todo List </h1>
    <p> {todoList?.errMessage} </p>
    <Link className=" txt-s pd-05 fill-secondary-red bdr-none bdr-rad-m txt-black txt-deco-none" to="/todo/create"> Create new Todo </Link>
        <h2 className="mg-t-2"> Your Todo Lists </h2>
        <div className="flex flex-row-wrap w-100"> 
            {todoList.map(todoList => (
                <div key={todoList._id} className="pd-1 mg-1 bdr-thin bdr-rad-m bdr-grey card-vert">
                    <p> {todoList.todoListName} </p>
                    <p> {todoList.tasks.length} tasks </p>
                    <br />
                    <Link className="txt-grey" to={`/todo/${todoList._id}`}> Click to View </Link>
                </div>
            ))}
        </div>
    </>)
}