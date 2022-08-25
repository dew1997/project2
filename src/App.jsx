import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/About";
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
        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
        <h1> Testing</h1>
        <h2>{exercise}</h2>
      </BrowserRouter>
    </div>
  );
}

export default App;
