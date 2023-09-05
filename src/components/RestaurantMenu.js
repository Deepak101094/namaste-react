import React from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurant";
import Simmer from "./Simmer";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);

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
