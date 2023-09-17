import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
	const {
		id,
		cloudinaryImageId,
		name,
		cuisines,
		avgRating,
		costForTwo,
		sla: { deliveryTime },
	} = resData?.info;
	return (
		<>
			<div
				data-testid='restaurant-card'
				className='m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-md'
			>
				<img
					className='w-[240px] h-[140px] rounded-md fit'
					alt='food-logo'
					src={CDN_URL + cloudinaryImageId}
				/>
				<h6 className='font-bold py-4 text-sm'> {name} </h6>
				<h6 className='text-xs'> {cuisines.join(", ")} </h6>
				<div className='flex justify-between pt-4 py-2 '>
					<h6 className='text-sm bg-yellow-500 text-white px-2 py-1'>
						{avgRating}star
					</h6>
					<h6 className='text-sm'>{deliveryTime}min</h6>
					<h6 className='text-sm'> {costForTwo} </h6>
				</div>
			</div>
		</>
	);
};

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label>Promoted</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
