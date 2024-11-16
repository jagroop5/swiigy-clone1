import { useNavigate } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

export default RestaurantCard = (props) => {
  const navigate = useNavigate();
  const { resData } = props;
  const { cloudinaryImageId, avgRating, name, cuisines, costForTwo, sla } =
    resData?.info;

  // console.log(resData);

  const navigateFunction = () => {
    navigate(`/restaurants/${resData.info.id}`);
  };

  const User = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      onClick={navigateFunction}
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4>{User.loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard ==> RestaurantCardPromoted

export const fastDeliveryLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">
          fast-delivery
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
