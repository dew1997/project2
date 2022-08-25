import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [exercise, setExercise] = useState([]);
  fetch("https://wger.de/api/v2/exercise/?format=json")
    .then((response) => response.json())
    .then((data) => setExercise(data.results[0].name));

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <h1> Testing</h1>
        <h2>{exercise}</h2>
      </BrowserRouter>
    </div>
  );
}

export default App;
