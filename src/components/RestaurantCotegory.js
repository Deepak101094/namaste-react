import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCotegory = ({ category, showItem, handleShowItem }) => {
	const { itemCards, title } = category?.card?.card;
	return (
		<div>
			{/* accordion header */}
			<div className='w-6/12 bg-white shadow-lg mx-auto my-6 p-4 cursor-pointer'>
				<div onClick={handleShowItem} className='flex justify-between'>
					<span className='font-bold text-lg'>
						{title}({itemCards.length})
					</span>
					<span> ⬇️</span>
				</div>
				{/* accordion body */}
				{showItem && <ItemList items={itemCards} />}
			</div>
		</div>
	);
};

export default RestaurantCotegory;
