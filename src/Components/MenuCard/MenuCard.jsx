import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuCard.css";

const MenuCard = ({ menu, hotelName }) => {
  const navigate = useNavigate();
  return (
    <div className="menu-card-container">
      {menu.map(({ name, imgSrc, price, qty }) => {
        return (
          <div
            key={name}
            className="card"
            onClick={() => navigate(`restaurants/${hotelName}`)}
          >
            <img src={imgSrc} alt={name} className="menu-img" />
            <div className="card-detail">
              <strong>{name}</strong>
              <span className="light-text">
                Rs. {price} for {qty}
              </span>
              <span className="light-text">{hotelName}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
