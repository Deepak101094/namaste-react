import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

describe("should render contact component", () => {
	test("should load contact component", () => {
		render(<Contact />);
		// Querying
		const heading = screen.getByRole("heading");

		// Assertion
		expect(heading).toBeInTheDocument();
	});

	test("should load button inside contact component", () => {
		render(<Contact />);
		// Querying

		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});
	test("should load input inside contact component", () => {
		render(<Contact />);

		// Querying
		const inputName = screen.getByPlaceholderText("name");

		expect(inputName).toBeInTheDocument();
	});

	test("should load 2 inout boxes on the contact component", () => {
		render(<Contact />);

		// Querying
		const inputBoxes = screen.getAllByRole("textbox");
		// console.log(inputBoxes);

		// assertion
		expect(inputBoxes).toHaveLength(3);
		// OR  expect(inputBoxes.length).toBe(3);
	});
});
