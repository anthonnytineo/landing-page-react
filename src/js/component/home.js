import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
		</>
	);
}
