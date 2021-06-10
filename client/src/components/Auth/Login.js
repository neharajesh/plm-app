import "./auth.css"
import { useState } from "react";
import { loginRequest } from "../../api/AuthAPI"

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitButtonHandler = async () => {
        await loginRequest(username, password);
    }    
    
    return(<>
        <div className="pageContainer">
            <h1>Login Page</h1>
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
        </div>
    </>)
}