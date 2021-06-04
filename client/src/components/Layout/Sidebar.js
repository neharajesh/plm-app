import "../../styles.css"
import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (<>
        <div className="sidebarContainer">
            <Link to="/" className="header-brand txt-700"> PET OWNER'S PLM </Link> <br/>
            <div className="mg-tb-2">
                <Link className="navLink" to="/"> <span> Home </span> </Link> <br />
                <Link className="navLink" to="/discover"> <span> Discover </span> </Link> <br />
                <Link className="navLink" to="/todo"> <span> Todo </span> </Link> <br />
                <Link className="navLink" to="/signin"> <span> Login </span> </Link> <br/>
                <Link className="navLink" to="/signup"> <span> Register </span> </Link>
            </div>
        </div>
    </>)
}