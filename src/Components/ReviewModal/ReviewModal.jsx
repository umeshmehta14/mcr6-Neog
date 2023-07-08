import React from "react";
import "./ReviewModal.css";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";
import { useData } from "../../Contexts/DataContext";

const ReviewModal = ({ openModal, setOpenModal, name }) => {
  const ratingOption = [1, 2, 3, 4, 5];
  const [reviewInput, setReviewInput] = useState({
    rating: 1,
    comment: "",
    pp: "https://rukminim2.flixcart.com/image/850/1000/kl5hh8w0/poster/6/n/z/medium-cute-cartoon-wall-sticker-poster-interior-wall-poster-original-imagycg3dxbt2kms.jpeg?q=90",
    revName: "Umesh",
  });
  const { handleReviews } = useData();

  const clickHandler = (e) => {
    e.preventDefault();
    handleReviews(reviewInput, name);
    setOpenModal(!openModal);
  };

  return (
    <main className="modal-container">
      <form className="modal-main" onSubmit={clickHandler}>
        <div className="cross-main" onClick={() => setOpenModal(!openModal)}>
          <RxCrossCircled title="Close" />
        </div>
        <h1>Add Your Review</h1>
        <div className="rating-input">
          <div className="input-box">
            <span>Rating:</span>
            <select
              value={reviewInput?.review}
              onChange={(e) =>
                setReviewInput({ ...reviewInput, rating: e.target.value })
              }
              required
            >
              <option disabled value="">
                Select Rating
              </option>
              {ratingOption.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="input-box">
            <label>Comment:</label>
            <textarea
              maxLength={"100"}
              onChange={(e) =>
                setReviewInput({ ...reviewInput, comment: e.target.value })
              }
              required
            />
          </div>
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default ReviewModal;
