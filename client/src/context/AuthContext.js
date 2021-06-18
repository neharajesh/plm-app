import { createContext, useContext, useState } from "react"

const initialUser = {
    _id: "",
    username: "",
    password: ""
}

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(initialUser);
    const [token, setToken] = useState("")
    return(<>
        <AuthContext.Provider value={{user, setUser, token, setToken}}>
            {children}
        </AuthContext.Provider>
    </>)
}

export const useAuth = () => {
    return useContext(AuthContext);
}