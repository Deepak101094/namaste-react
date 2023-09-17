import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, {
	withPromotedLabel,
} from "../components/RestaurantCard";
import mockData from "./mockData/resCardMock.json";

it("should render Restaurant card component with props", () => {
	render(<RestaurantCard resData={mockData} />);

	const name = screen.getByText("Soul Rasa");
	expect(name).toBeInTheDocument();
});

// it("should render withPromotedLabel componenet with props", () => {
// 	const RestaurantCardPromoted = withPromotedLabel(mockData);

// 	render(<RestaurantCardPromoted {...mockData} />);

// 	// const label = screen.getByLabelText("Promoted");
// 	// expect(label).toBeTruthy();
// });
