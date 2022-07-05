import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function Rotas() {
	//routas de navegação
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/Home" element={<Home />} />
		</Routes>
	);
}

export default Rotas;
