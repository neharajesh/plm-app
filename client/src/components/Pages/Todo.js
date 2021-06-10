import "../../styles.css"
import { Link } from "react-router-dom"
import { useTodo } from "../../context/TodoContext"
// import { todoLists } from "../../data/todoListData"

export const Todo = () => {
    const { todoList } = useTodo();
    console.log(todoList)
    return (<>
    <h1> Todo List </h1>
    <p> {todoList?.errMessage} </p>
    <button className="pd-05 mg-tb-2 fill-secondary-red bdr-none bdr-rad-m"> Create new Todo </button>
        <h2> Your Todo Lists </h2>
        <div className="flex flex-wrap w-100"> 
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