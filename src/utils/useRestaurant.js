import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

export const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch(MENU_URL + resId);
		const json = await response.json();
		setResInfo(json.data);
	};

	return resInfo;
};
