import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Dumbbell from "../images/dumbbell.png";
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={Dumbbell} alt="dumbbelllogo" />
      </Link>
      <ul>
        <Link to="/Exercise">Exercise</Link>
        <Link to="/Workout">Workout</Link>
        <Link to="/About">About</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
