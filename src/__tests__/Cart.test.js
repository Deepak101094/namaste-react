import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";
import Header from "../components/Header";
import RestaurantMenu from "../components/RestaurantMenu";
import appStore from "../utils/store/appStore";
import RESMENU_MOCK_DATA from "./mockData/ResMenuMockData.json";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => Promise.resolve(RESMENU_MOCK_DATA),
	});
});

it("should render Cart component", async () => {
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
	const textWithXZeroItem = screen.getAllByTestId("cartItemZero");
	expect(textWithXZeroItem.length).toBe(1);

	// const clearButton = screen.getByRole("button", { name: "Clear Cart" });
});
