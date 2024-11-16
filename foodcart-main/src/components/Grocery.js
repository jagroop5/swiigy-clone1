import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const User = useContext(UserContext);

  return (
    <>
      <h1>
        Welcome to Grocery page, let's shop your daily grocery from our
        application.
      </h1>
      <h1 className="font-bold">{User?.loggedInUser}</h1>
    </>
  );
};

export default Grocery;
