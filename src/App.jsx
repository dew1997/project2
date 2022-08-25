import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./Pages/About";

import Exercise from "./Pages/Exercise";
import Workout from "./Pages/Workout";
// import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
function App() {
  const [exercise, setExercise] = useState([]);
  fetch("https://wger.de/api/v2/exercise/?format=json")
    .then((response) => response.json())
    .then((data) => setExercise(data.results[10].name));

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <h1> Testing</h1>
        <h2>{exercise}</h2>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Exercise" element={<Exercise />} />
          <Route path="/Workout" element={<Workout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
