import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
import Simmer from "./Simmer";

const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null);

	const { resId } = useParams();
	console.log(resId);
	const fetchMenu = async () => {
		const response = await fetch(MENU_URL + resId);
		const json = await response.json();
		setResInfo(json.data);
		console.log(json, "res");
	};

	useEffect(() => {
		fetchMenu();
	}, []);

	if (resInfo === null) {
		return <Simmer />;
	}

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[0].card?.card?.info;

	const { itemCards } =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

	return (
		<div className='menu'>
			<h1>{name} </h1>
			<p>
				{" "}
				{cuisines.join(" , ")} - {costForTwoMessage}{" "}
			</p>
			<ul>
				{itemCards?.map((item) => (
					<li key={item?.card?.info?.id}>
						{item?.card?.info?.name} -Rs.
						{item?.card?.info?.price / 100 ||
							item?.card?.info?.defaultPrice}{" "}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
