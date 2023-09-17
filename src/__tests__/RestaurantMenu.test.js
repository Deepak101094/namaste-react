import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import RestaurantMenu from "../components/RestaurantMenu";
import appStore from "../utils/store/appStore";
import RESMENU_MOCK_DATA from "./mockData/ResMenuMockData.json";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => Promise.resolve(RESMENU_MOCK_DATA),
	});
});

it("should render Restaurant Menu Component", async () => {
	await act(async () =>
		render(
			<Provider store={appStore}>
				<BrowserRouter>
					<Header />
					<RestaurantMenu />
					<Cart />
				</BrowserRouter>
			</Provider>
		)
	);
	const accordianHeader = screen.getByText("BIRYANI BUCKETS(10)");
	fireEvent.click(accordianHeader);

	const foodItemList = screen.getAllByTestId("foodItems");
	expect(foodItemList.length).toBe(10);

	const cartHeaderBeforeUpdate = screen.getByText("0");
	expect(cartHeaderBeforeUpdate).toBeInTheDocument();

	const AddButtons = screen.getAllByRole("button", { name: "Add +" });
	fireEvent.click(AddButtons[0]);

	const cartHeader = screen.getByText("1");
	expect(cartHeader).toBeInTheDocument();

	fireEvent.click(AddButtons[2]);
	expect(screen.getByText("2")).toBeInTheDocument();

	expect(screen.getAllByTestId("foodItems").length).toBe(14);

	fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
	expect(screen.getAllByTestId("foodItems").length).toBe(10);
	expect(
		screen.getByText("Your cart is empty! Please add items to the cart.")
	).toBeInTheDocument();
});

// it("should render header component with 0 item in the cart", async () => {
// 	await act(async () =>
// 		render(
// 			<Provider store={appStore}>
// 				<BrowserRouter>
// 					<Header />
// 					<RestaurantMenu />
// 				</BrowserRouter>
// 			</Provider>
// 		)
// 	);

// 	const cartHeaderBeforeUpdate = screen.getByText("0");
// 	expect(cartHeaderBeforeUpdate).toBeInTheDocument();
// });
