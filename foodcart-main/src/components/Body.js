import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { fastDeliveryLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { SWIGGY_URL } from "../utils/constants.js";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("restaurant", listOfRestaurants);

  const FastDeliveryRestaurantCard = fastDeliveryLabel(RestaurantCard);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    console.log(data);

    const json = await data.json();
    // console.log("API data", json);
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const searchFunction = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const filterFunction = () => {
    const filteredList = filteredRestaurant.filter(
      (res) => res.info.avgRating >= 4.4
    );
    // console.log(filteredList);
    setFilteredRestaurant(filteredList);
  };

  if (!onlineStatus) {
    return (
      <h1>Looks like you're offline!! Please check your Internet Connection</h1>
    );
  }

  // Conditional Rendering
  if (filteredRestaurant.length === 0) {
    return <Shimmer />;
    // return <h1>Loading....</h1>;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center">
          <input
            data-testid="searchInput"
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="border border-solid border-black"
            value={searchText}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={searchFunction}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={filterFunction}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <input
            className="border border-black "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return restaurant.info.sla.deliveryTime < 25 ? (
            <FastDeliveryRestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            />
          ) : (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
