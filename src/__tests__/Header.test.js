import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import appStore from "../utils/store/appStore";

describe("should render header component", () => {
	it("should render header compoent with a login button", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);
		const logInButton = screen.getByRole("button", { name: "Login" });
		//  const bottonText = screen.getByText("Login");

		expect(logInButton).toBeInTheDocument();
	});
	it("should render header compoent with online status", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);
		const cartItems = screen.getByText("OnlineStatus:✅");
		expect(cartItems).toBeInTheDocument();
	});
	it("should change login button to logout", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);
		const logInButton = screen.getByRole("button", { name: "Login" });
		fireEvent.click(logInButton);
		const logOutButton = screen.getByRole("button", { name: "Logout" });
		expect(logOutButton).toBeInTheDocument();
	});
});
