import React, { useEffect, useState } from "react";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Simmer from "./Simmer";

const Body = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	const [filteredResList, setFilteredResList] = useState([]);
	const [searchText, setSearchText] = useState("");
	const onlineStatus = useOnlineStatus();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		console.log(json, "from list");
		const resData =
			json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants;

		setRestaurantList(resData);
		setFilteredResList(resData);
	};

	const filterRestaurant = () => {
		const filterResList = restaurantList.filter(
			(item) => item.info.avgRating > 4
		);
		setRestaurantList(filterResList);
	};

	const searchHandler = () => {
		const upatedtList = restaurantList.filter((res) => {
			return res.info.name.toLowerCase().includes(searchText.toLowerCase());
		});
		setFilteredResList(upatedtList);
	};

	if (restaurantList?.length === 0) {
		return <Simmer />;
	}
	if (onlineStatus === false) {
		return (
			<h1>
				Looks like you're offline!! Please check your internet connection!
			</h1>
		);
	}

	return (
		<div className='body'>
			<div className='flex'>
				<div className='m-4 p-4'>
					<input
						type='text'
						className='border border-solid border-black px-4 py-2 rounded-lg'
						onChange={(e) => setSearchText(e.target.value)}
						value={searchText}
					/>
					<button
						className='px-4 py-2 bg-green-100 m-4 rounded-lg'
						onClick={searchHandler}
					>
						search
					</button>
				</div>
				<div className='m-4 p-4 flex items-center'>
					<button
						onClick={filterRestaurant}
						className=' bg- px-4 py-2 bg-gray-100 rounded-lg'
					>
						Top Reted Restaurant
					</button>
				</div>
			</div>
			<div className='flex flex-wrap'>
				<RestaurantCard resData={filteredResList} />
			</div>
		</div>
	);
};
export default Body;
