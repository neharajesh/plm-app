import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import { Layout } from "./components/Layout/Layout";
import { Discover } from "./components/Pages/Discover";
import { Home } from "./components/Pages/Home";
import { Todo } from "./components/Pages/Todo";
import { TodoListDetails } from "./components/Pages/TodoListDetails";
import { CreateTodo } from "./components/Pages/CreateTodo";
import { useTheme } from "./context/ThemeContext";

const App = () => {
    const { theme } = useTheme();
	return (<div className={theme === "dark" && "darkTheme"}>
		<Routes>
			<Route path="/signin"><Layout> <Login /> </Layout></Route>
			<Route path="/signup"><Layout> <Register /> </Layout></Route>

            <Route path="/"><Layout> <Home /> </Layout></Route>
            <Route path="/discover"><Layout> <Discover /> </Layout></Route>
            <Route path="/todo"><Layout>
                <PrivateRoute path="/todo" element={<Todo />} />              
            </Layout></Route>
            <Route path="/todo/create"> <Layout> <CreateTodo /> </Layout> </Route>
            <Route path="/todo/:todoId"><Layout> <TodoListDetails /> </Layout></Route>
		</Routes>
        
	</div>);
}

export default App;