import React from "react";
import User from "./User";

// lifecycle of components

const About = () => {
	return (
		<div>
			About
			<h2>This is Namaste React Series</h2>
			<User name='Deepak Pandey' location='Ballia' contact='+8249849' />
		</div>
	);
};

export default About;
