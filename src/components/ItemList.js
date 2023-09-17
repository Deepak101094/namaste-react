import React from "react";
import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../utils/constant";
import { addItem } from "../utils/store/cartSlice";

const ItemList = ({ items }) => {
	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		dispatch(addItem(item));
	};

	return (
		<div>
			{items.map((item) => {
				const {
					info: { id, name, price, description, imageId },
				} = item?.card;
				return (
					<div
						key={id}
						className='flex justify-between py-4 border-b border-gray-400'
						data-testid='foodItems'
					>
						<div className='flex w-9/12 flex-col text-left items-start'>
							<span className=' text-sm font-semibold'> {name} </span>
							<span className='text-sm'> ₹{price / 100} </span>
							<span className='text-xs text-gray-400 my-4  flex '>
								{description}{" "}
							</span>
						</div>
						<div className='relative 3/12 flex justify-center'>
							<img
								className=' w-40 h-32 rounded-lg'
								src={IMAGE_URL + imageId}
								alt='pic'
							/>
							<button
								onClick={() => handleAddItem(item)}
								className='absolute bg-white px-4 py-2 border border-gray-300 shadow-2xl text-green-500 bottom-[-1] rounded-lg'
							>
								Add +
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;
