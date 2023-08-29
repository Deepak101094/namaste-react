import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// lifecycle of components

class About extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {}
	render() {
		return (
			<div>
				About
				<h2>This is Namaste React Series</h2>
				<UserClass name='Deepak Pandey' location='Ballia' contact='+8249849' />
			</div>
		);
	}
}

export default About;
