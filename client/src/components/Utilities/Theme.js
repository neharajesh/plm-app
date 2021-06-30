import { useTheme } from "../../context/ThemeContext"

export const Theme = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        theme === "dark" ? setTheme("") : setTheme("dark")
    }

    return (<>
        <button onClick={() => changeTheme()} className="fixedThemeButton"> {theme === "dark" ? "🌞" : "🌙"} </button>
    </>)
}