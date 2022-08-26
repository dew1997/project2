import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Exercise from "./Pages/Exercise";
import Homepage from "./Pages/Homepage";
import Workout from "./Pages/Workout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
