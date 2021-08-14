import "./styles/App.scss";
import Navigation from "./components/Navigation/Navigation";
import Cards from "./components/Cards/Cards";
import Sidebar from "./components/Cards/Sidebar";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
	return (
		<ChakraProvider>
			<div className="App">
				<Navigation />
				<main>
					<div className="container">
						<Router>
							<Switch>
								<Route exact path="/">
									<Login />
								</Route>
								<Route exact path="/home">
									<Register />
									<Cards />
									<Sidebar />
								</Route>
							</Switch>
						</Router>
					</div>
				</main>
			</div>
		</ChakraProvider>
	);
}

export default App;
