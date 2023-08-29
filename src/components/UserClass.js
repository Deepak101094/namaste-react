import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {
				name: "Dummy",
				location: "Default",
				contact: "@deepakpandey",
			},
		};
	}

	async componentDidMount() {
		// API call
		const response = await fetch("https://api.github.com/users/Deepak101094");
		const json = await response.json();
		this.setState({
			userInfo: json,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.userInfo !== prevState.userInfo) {
			// do something..
		}
	}

	componentWillUnmount() {}

	render() {
		const { name, location, avatar_url, twitter_username } =
			this.state.userInfo;
		return (
			<div className='user-card'>
				<img src={avatar_url} />
				<h2>Name:{name}</h2>
				<h3>Location:{location} </h3>
				<h4>Contact:{twitter_username} </h4>
			</div>
		);
	}
}
export default UserClass;

/****
 *
 *  ---MOUNTING---
 *
 * Constructor will call with initial state
 * Render will call (initial data or dummy data)
 *     <HTML (load with dummy data)>
 * Component Did Mount
 *    <API call>
 *    <this.setState> --> state variable is updated
 *
 *  ---UPDATING---
 *
 *   Render(API data)
 *   <HTML (load with new API data)>
 *   Component Did Update
 */
