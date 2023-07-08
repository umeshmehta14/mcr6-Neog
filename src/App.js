import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import SingleRestraunt from "./Pages/Single Restraunt/SingleRestraunt";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="restaurants/:restaurantName"
          element={<SingleRestraunt />}
        />
      </Routes>
    </div>
  );
}

export default App;
