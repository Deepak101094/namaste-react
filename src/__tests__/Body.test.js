import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import MOCK_DATA from "./mockData/ResListmockData.json";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MOCK_DATA);
		},
	});
});
it("should render the body component with Search using restaurant name", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

	const resListBeforeFilter = screen.getAllByTestId("restaurant-card");

	expect(resListBeforeFilter.length).toBe(20);

	const searchInput = screen.getByTestId("searchInput");

	fireEvent.change(searchInput, { target: { value: "kfc" } });

	const searchButton = screen.getByRole("button", { name: "search" });

	fireEvent.click(searchButton);

	expect(searchButton).toBeInTheDocument();

	// assert ==> screen should have filtered restaurant list
	const restaurantCart = screen.getAllByTestId("restaurant-card");

	expect(restaurantCart).toHaveLength(1);
});

it("should filter top rated restaurant", async () => {
	await act(async () =>
		render(
			<BrowserRouter>
				<Body />
			</BrowserRouter>
		)
	);

	const cardBeforeFilter = screen.getAllByTestId("restaurant-card");

	expect(cardBeforeFilter).toHaveLength(20);

	const filterButton = screen.getByRole("button", {
		name: "Top Reted Restaurant",
	});

	fireEvent.click(filterButton);

	const cardAfterFilter = screen.getAllByTestId("restaurant-card");

	expect(cardAfterFilter).toHaveLength(19);
});
