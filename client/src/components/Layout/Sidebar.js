import "../../styles.css"
import { Link } from "react-router-dom"
import { useTheme } from "../../context/ThemeContext"
import { useAuth } from "../../context/AuthContext";
import { showNotification } from "../Utilities/toast";

export const Sidebar = () => {
    const { theme, setTheme } = useTheme();
    const { token } = useAuth();
    const changeTheme = () => {
        theme === "dark" ? setTheme("") : setTheme("dark")
    }

    const logoutHandler = () => {
        showNotification("Logging]]' Out")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return (<>
        <div className="sidebarContainer">
            <Link to="/" className="header-brand txt-700"> PLM </Link> <br/>
            <div className="mg-tb-2">
                <Link className="navLink" to="/"> <span> Home </span> </Link> <br />
                <Link className="navLink" to="/discover"> <span> Discover </span> </Link> <br />
                <Link className="navLink" to="/todo"> <span> My Todos </span> </Link> <br />
                {token === "" 
                ? <Link className="navLink" to="/signin"> <span> Login </span> </Link>  
                : <div className="txt-l csr-point navLink" onClick={() => logoutHandler()}> Logout </div> }
            </div>
            <button onClick={() => changeTheme()} className="fixedThemeButton"> Change Theme </button>
            <div id="notification-container"></div>
        </div>
    </>)
}