import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	const { logInUser } = useContext(UserContext);
	const cartItem = useSelector((state) => state.cart.items);

	return (
		<div className='flex justify-between bg-pink-100 shadow-lg'>
			<div className='px-4 m-2'>
				<img className='w-20' src={LOGO_URL} />
			</div>
			<div className='flex items-center'>
				<ul className='flex items-center p-4 m-4 gap-4 '>
					<li className='bg-gray-100 px-4 py-2 rounded-lg cursor-pointer'>
						OnlineStatus:{useOnlineStatus ? "✅" : "🔴"}
					</li>
					<li className='bg-gray-100 px-4 py-2 rounded-lg cursor-pointer'>
						<Link to='/'>Home</Link>
					</li>
					<li className='bg-gray-100 px-4 py-2 rounded-lg cursor-pointer'>
						<Link to='/about'>About</Link>
					</li>
					<li className='bg-gray-100 px-4 py-2 rounded-lg cursor-pointer'>
						<Link to='/contact'>Contact Us</Link>
					</li>
					<li className='bg-gray-100 px-4 py-2 rounded-lg cursor-pointer'>
						<Link to='/grocery'>Grocery</Link>
					</li>
					<li className='bg-gray-100 relative text-black  px-4 py-2 rounded-lg cursor-pointer'>
						<Link className='text-red-500 text-3xl' to='/cart'>
							🛒
							<span className='bg-black text-sm  py-1 px-2 rounded-lg top-0  text-white absolute'>
								{cartItem.length}
							</span>
						</Link>
					</li>
					<button
						onClick={() =>
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
						}
						className='bg-gray-100 px-4 py-2 rounded-lg cursor-pointer'
					>
						{btnName}
					</button>
					<li>{logInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
