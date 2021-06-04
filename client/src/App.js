import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Pages/Home";
import { Todo } from "./components/Pages/Todo";

const App = () => {
	return (<>
		<Routes>
			<Route path="/signin"><Layout> <Login /> </Layout></Route>
			<Route path="/signup"><Layout> <Register /> </Layout></Route>

            <Route path="/"><Layout> <Home /> </Layout></Route>
            <Route path="/todo"><Layout> <Todo /> </Layout></Route>
		</Routes>
	</>);
}

export default App;