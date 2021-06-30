import "./auth.css"
import { useState } from "react";
import { loginRequest } from "../../api/AuthAPI"
import { showNotification } from "../Utilities/toast"
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { setUser, setToken } = useAuth()

    const submitButtonHandler = async () => {
        const { message, user, authToken } = await loginRequest(username, password);
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("token", JSON.stringify(authToken))
        setUser(user)
        setToken(authToken)
        showNotification(message)
    }
    
    return(<>
        <div className="pageContainer">
            <h1> Login </h1>
            <div className="authContainer pd-1 mg-tb-2">
                <div className="inputContainer"> 
                    <span> Username </span> 
                    <input className="authInput" type="text" onChange={(e) => setUsername(e.target.value)} /> 
                </div>
                <div className="inputContainer"> 
                    <span> Password </span> 
                    <input className="authInput" type="password" onChange={(e) => setPassword(e.target.value)} /> 
                </div>
                <button className="submitButton" onClick={submitButtonHandler}> Submit </button>
            </div>
            <Link className="registerLink" to="/signup"> <span> Click here to Register </span> </Link>
            <div id="notification-container"></div>
        </div>
    </>)
}