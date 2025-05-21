import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../features/home";
import MoviesPage from "../features/movies";

function AppRoutes() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/filmes" element={<MoviesPage />} />
					<Route path="/ingressos" element={<Tickets />} />
					<Route path="/salas" element={<Theater />} />
				</Routes>
			</Router>
		</>
	);
}

export default AppRoutes;
