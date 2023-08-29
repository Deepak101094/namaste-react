import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Simmer from "./Simmer";

const Body = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	const [filteredResList, setFilteredResList] = useState([]);
	const [searchText, setSearchText] = useState("");

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

	return (
		<div className='body'>
			<div className='filter'>
				<div className='search'>
					<input
						type='text'
						className='search-input'
						onChange={(e) => setSearchText(e.target.value)}
						value={searchText}
					/>
					<button onClick={searchHandler}>search</button>
				</div>
				<button onClick={filterRestaurant} className='filter-btn'>
					Top Reted Restaurant
				</button>
			</div>
			<div className='res-container'>
				<RestaurantCard resData={filteredResList} />
			</div>
		</div>
	);
};
export default Body;
