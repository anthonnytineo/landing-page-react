import React from "react";

import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";
//include images into your bundle
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</>
	);
}
