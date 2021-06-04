import { useState } from "react"
import { registerRequest } from "../../api/AuthAPI"

export const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")
    const [message, setMessage] = useState("")

    const submitButtonHandler = () => {
        const { message } = registerRequest(username, password);
        setMessage(message)
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
            {message}
        </div>
    </>)
}