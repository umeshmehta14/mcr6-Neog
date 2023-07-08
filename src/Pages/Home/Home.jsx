import React from "react";
import MenuCard from "../../Components/MenuCard/MenuCard";
import { useData } from "../../Contexts/DataContext";
import { cuisineData } from "../../Data/Data";

import "./Home.css";

const Home = () => {
  const { cuisineId, handleCuisine, selectedCuisine } = useData();
  return (
    <div className="home-container">
      <h1 className="hero-heading">Food Ordering App</h1>
      <h2 className="cuisine-heading">Select Cuisine:</h2>
      <div className="cuisine-box">
        {cuisineData.map(({ id, name }) => {
          return (
            <button
              key={id}
              className={`${cuisineId === id ? "btn selected-btn" : "btn"}`}
              onClick={() => handleCuisine(id)}
            >
              {name}
            </button>
          );
        })}
      </div>
      <div className="restuarants">
        {selectedCuisine.map(({ id, name, menu }) => {
          return (
            <div key={id} className="hotel-container">
              <h2>Dishes By {name}</h2>
              <MenuCard menu={menu} hotelName={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
