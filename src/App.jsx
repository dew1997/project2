import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Exercise from "./Pages/Exercise";
import Homepage from "./Pages/Homepage";
import Workout from "./Pages/Workout";
import { GlobalProvider } from "./Pages/context/GlobalState";
import Footer from "./components/Footer";

function App() {
  return (
    <GlobalProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Exercise" element={<Exercise />} />
              <Route path="/Workout" element={<Workout />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}

export default App;
