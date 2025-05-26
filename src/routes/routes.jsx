import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../features/home";
import MoviesPage from "../features/movies";
import TheaterPage from "../features/theater";
import SessionPage from "../features/sessions";
import TicketsPage from "../features/tickets";
import Layout from "../components/layout";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/filmes" element={<MoviesPage />} />
                <Route path="/salas" element={<TheaterPage />} />
                <Route path="/sessoes" element={<SessionPage />} />
                <Route path="/ingressos" element={<TicketsPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
