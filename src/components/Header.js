import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	return (
		<div className='header'>
			<div className='logo-container'>
				<img className='logo' src={LOGO_URL} />
			</div>
			<div className='nav-items'>
				<ul>
					<li>OnlineStatus:{useOnlineStatus ? "✅" : "🔴"}</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contact'>Contact Us</Link>
					</li>
					<li>
						<Link to='/grocery'>Grocery</Link>
					</li>
					<li>
						<Link to='/cart'>Cart</Link>
					</li>
					<button
						onClick={() =>
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
						}
						className='login'
					>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
