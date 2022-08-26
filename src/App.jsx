import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Exercise from "./Pages/Exercise";
import Homepage from "./Pages/Homepage";
import Workout from "./Pages/Workout";
// import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Exercise" element={<Exercise />} />
          <Route path="/Workout" element={<Workout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
