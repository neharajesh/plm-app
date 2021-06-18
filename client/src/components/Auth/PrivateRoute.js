import { useAuth } from "../../context/AuthContext"
import { Navigate, Route } from "react-router";

export const PrivateRoute = ({path, ...props}) => {
    const { token } = useAuth();

    return (<>
        { token === "" ? <Navigate to="/signin" /> : <Route {...props} path={path} /> }
    </>)
}