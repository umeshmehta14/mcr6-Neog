import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../Contexts/DataContext";
import { AiOutlineArrowLeft, AiOutlineStar } from "react-icons/ai";
import "./SingleRestraunt.css";
import ReviewModal from "../../Components/ReviewModal/ReviewModal";

const SingleRestraunt = () => {
  const { restaurantName } = useParams();
  const navigate = useNavigate();

  const { restaurants } = useData();

  const [openModal, setOpenModal] = useState(false);

  const selectedRestaurant = restaurants.find(
    ({ name }) => name === restaurantName
  );
  const { address, name, ratings, menu } = selectedRestaurant;
  console.log(ratings);

  const ratingSum = (
    ratings?.reduce((sum, review) => sum + Number(review.rating), 0) /
    ratings?.length
  ).toFixed(1);
  return (
    <div className="single-container">
      <nav className="backnav" title="Back" onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft />
      </nav>
      <section className="s-restraunt-detail">
        <section className="s-detail-section">
          <h1 className="hero-heading s-head">{name}</h1>
          <span className="light-text">
            {menu?.map(({ name }) => name)?.join(", ")}
          </span>
          <span className="light-text">{address}</span>
          <span className="light-text">Average Rating: {ratingSum}</span>
        </section>
        <div className="review-btn">
          <button className="btn" onClick={() => setOpenModal(!openModal)}>
            Add Review
          </button>
        </div>
      </section>
      <section className="review-container">
        <h1>Reviews</h1>
        <div className="review-main">
          {ratings.map(({ rating, comment, pp, revName }, i) => {
            return (
              <div key={i} className="rev-card">
                <div className="card-left">
                  <section className="profile-name">
                    <img src={pp} alt={revName} className="rev-avatar" />
                    <strong>{revName}</strong>
                  </section>
                  <section className="comment-part">
                    <span>{comment}</span>
                  </section>
                </div>
                <div className="card-right">
                  <span>
                    {rating} <AiOutlineStar />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {openModal && (
        <ReviewModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          name={name}
        />
      )}
    </div>
  );
};

export default SingleRestraunt;
