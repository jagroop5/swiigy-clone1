import React, { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(MENU_URL + id);
    const json = await data.json();
    setResMenu(json);
  }

  return resMenu;
};

export default useRestaurantMenu;
