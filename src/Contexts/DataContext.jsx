import { createContext, useContext, useState } from "react";
import { restaurantsData } from "../Data/Data";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [selectedCuisine, setSelectedCuisine] = useState([]);
  const [cuisineId, setCuisineId] = useState();

  const handleCuisine = (cuisinId) => {
    setCuisineId(cuisinId);
    const allCuisines = restaurants?.filter(
      ({ cuisine_id }) => cuisine_id === cuisinId
    );
    setSelectedCuisine(allCuisines);
  };

  const handleReviews = (newReview, hotelName) => {
    console.log(newReview);
    const updatedReview = restaurants?.map((restraunt) =>
      restraunt.name === hotelName
        ? { ...restraunt, ratings: [{ ...newReview }, ...restraunt.ratings] }
        : restraunt
    );
    setRestaurants(updatedReview);
  };
  return (
    <DataContext.Provider
      value={{
        restaurants,
        handleCuisine,
        handleReviews,
        selectedCuisine,
        cuisineId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
