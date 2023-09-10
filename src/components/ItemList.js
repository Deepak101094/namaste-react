import React from "react";
import { IMAGE_URL } from "../utils/constant";

const ItemList = ({ items }) => {
	console.log(items);
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
					>
						<div className='flex w-9/12 flex-col text-left items-start'>
							<span className=' text-sm font-semibold'> {name} </span>
							<span className='text-sm'> ₹{price / 100} </span>
							<span className='text-xs text-gray-400 my-4  flex '>
								{description}{" "}
							</span>
						</div>
						<div>
							<div className='relative flex justify-center'>
								<img
									className='w-40  rounded-lg relative'
									src={IMAGE_URL + imageId}
									alt='pic'
								/>
								<button className='absolute bg-white px-8 py-2 text-green-500 bottom-0 rounded-lg'>
									Add
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;
