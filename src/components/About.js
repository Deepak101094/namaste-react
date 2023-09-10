import React from "react";
import { UserContext } from "../utils/UserContext";
import User from "./User";

// lifecycle of components

class About extends React.Component {
	// constructor() {
	// 	super(props);
	// 	state = {};
	// }
	render() {
		return (
			<div>
				About
				<h2>This is Namaste React Series</h2>
				<UserContext.Consumer>
					{({ logInUser }) => (
						<h2 className='text-lg font-bold'> {logInUser} </h2>
					)}
				</UserContext.Consumer>
				<User name='Deepak Pandey' location='Ballia' contact='+8249849' />
			</div>
		);
	}
}

export default About;
