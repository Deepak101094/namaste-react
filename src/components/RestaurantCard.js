import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
	return (
		<>
			{resData?.map(({ info }) => {
				return (
					<Link to={"/restaurant/" + info.id} key={info.id}>
						<div className='m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-md'>
							<img
								className='w-[240px] h-[140px] rounded-md fit'
								alt='food-logo'
								src={CDN_URL + info.cloudinaryImageId}
							/>
							<h6 className='font-bold py-4 text-sm'> {info.name} </h6>
							<h6 className='text-xs'> {info.cuisines.join(", ")} </h6>
							<div className='flex flex-row justify-between mt-2 my-2 '>
								<div className='flex gap-2'>
									<h6 className='text-sm'> {info.costForTwo.slice(0, -7)} </h6>
									<h6 className='text-sm text-blue-300'>
										{info.sla.deliveryTime}min
									</h6>
								</div>
								<div>
									<h6 className='text-sm text-yellow-500'>
										{info.avgRating}star{" "}
									</h6>
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</>
	);
};

export default RestaurantCard;
