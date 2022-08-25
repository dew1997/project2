import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
function App() {
  const [exercise, setExercise] = useState([]);
  fetch("https://wger.de/api/v2/exercise/?format=json")
    .then((response) => response.json())
    .then((data) => setExercise(data.results[0].name));

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <h1> Testing</h1>
      <h2>{exercise}</h2>
    </div>
  );
}

export default App;
