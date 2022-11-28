import React from "react";

import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar/> 
			<Jumbotron/>
		</div>
		
	);
};

export default Home;
