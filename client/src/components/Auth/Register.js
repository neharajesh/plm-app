import { useState } from "react"
import { registerRequest } from "../../api/AuthAPI"
import { showNotification } from "../Utilities/toast"

export const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")

    const submitButtonHandler = async () => {
        const { message } = await registerRequest(username, password);
        showNotification(message)
    }

    return (<>
        <div className="pageContainer">
            <h1> Register Page </h1>
            <div className="authContainer pd-1 mg-tb-2">
                <div className="inputContainer"> 
                    <span> Username </span> 
                    <input className="authInput" type="text" onChange={(e) => setUsername(e.target.value)} /> 
                </div>
                <div className="inputContainer"> 
                    <span> Password </span> 
                    <input className="authInput" type="password" onChange={(e) => setPassword(e.target.value)} /> 
                </div>
                <div className="inputContainer"> 
                    <span> ReType Password </span> 
                    <input className="authInput" type="password" onChange={(e) => setRetypePassword(e.target.value)} /> 
                </div>
                <button className="submitButton" onClick={submitButtonHandler} disabled={!(password === retypePassword)}> Submit </button>
            </div>
            <p>password : {password===retypePassword ? "maaaatches" : "no match :c"}</p>
            <div id="notification-container"></div>
        </div>
    </>)
}