import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurant";
import RestaurantCotegory from "./RestaurantCotegory";
import Simmer from "./Simmer";

const RestaurantMenu = () => {
	const [showIndex, setShowIndex] = useState(0);
	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) {
		return <Simmer />;
	}

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[0]?.card?.card?.info;

	const cotegories =
		resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
			(c) =>
				c?.card?.["card"]?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	const handleShowItem = (i) => {
		setShowIndex(i);
	};

	return (
		<div className='text-center bg-gray-100'>
			<h1 className='font-bold pt-6 text-xl'>{name} </h1>
			<p>
				{cuisines.join(" , ")} - {costForTwoMessage}
			</p>
			{/* categories accordions */}
			{cotegories?.map((category, index) => (
				<RestaurantCotegory
					key={index}
					category={category}
					showItem={index === showIndex ? true : false}
					handleShowItem={() => handleShowItem(index)}
				/>
			))}
		</div>
	);
};

export default RestaurantMenu;
