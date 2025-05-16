import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Filmes from "./pages/movies.jsx";
import Tickets from "./pages/tickets.jsx";
import Theater from "./pages/theater.jsx";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/filmes" element={<Filmes />} />
					<Route path="/ingressos" element={<Tickets />} />
					<Route path="/salas" element={<Theater />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
