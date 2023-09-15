import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/UserContext";
import appStore from "./utils/store/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

// Chunking
// Code Spliting
// Dynamic Bundling
// lazy loading
// on demand loading
// dynamic import

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
	const [userInfo, setUserInfo] = useState();

	useEffect(() => {
		// Make API call and send username and password then server gives us userInfo
		const data = { name: "Deepak" };
		setUserInfo(data.name);
	}, []);

	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ logInUser: userInfo, setUserInfo }}>
				<div className='app'>
					<Header />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/restaurant/:resId",
				element: <RestaurantMenu />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
