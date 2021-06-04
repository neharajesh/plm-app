import "../../styles.css"
import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (<>
        <div className="sidebarContainer">
            <Link className="navLink" to="/"> <span> Home </span> </Link> <br />
            <Link className="navLink" to="/signin"> <span> Login </span> </Link> <br/>
            <Link className="navLink" to="/signup"> <span> Register </span> </Link>
        </div>
    </>)
}