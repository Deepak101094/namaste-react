import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
	return (
		<>
			{resData?.map(({ info }) => {
				return (
					<Link to={"/restaurant/" + info.id} key={info.id}>
						<div className='res-card'>
							<img
								className='res-logo'
								alt='food-logo'
								src={CDN_URL + info.cloudinaryImageId}
							/>
							<h4> {info.name} </h4>
							<h4> {info.cuisines.join(", ")} </h4>
							<h4> {info.avgRating}star </h4>
							<h4> {info.costForTwo} </h4>
							<h4>{info.sla.deliveryTime}min</h4>
						</div>
					</Link>
				);
			})}
		</>
	);
};

export default RestaurantCard;
