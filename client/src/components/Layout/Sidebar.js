import "../../styles.css"
import { Link } from "react-router-dom"
import { useTheme } from "../../context/ThemeContext"

export const Sidebar = () => {
    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        theme === "dark" ? setTheme("") : setTheme("dark")
    }

    return (<>
        <div className="sidebarContainer">
            <Link to="/" className="header-brand txt-700"> PET OWNER'S PLM </Link> <br/>
            <div className="mg-tb-2">
                <Link className="navLink" to="/"> <span> Home </span> </Link> <br />
                <Link className="navLink" to="/discover"> <span> Discover </span> </Link> <br />
                <Link className="navLink" to="/todo"> <span> My Todos </span> </Link> <br />
                <Link className="navLink" to="/signin"> <span> Login </span> </Link> <br/>
                <Link className="navLink" to="/signup"> <span> Register </span> </Link>
            </div>
            <button onClick={() => changeTheme()} className="fixedThemeButton"> Change Theme </button>
        </div>
    </>)
}