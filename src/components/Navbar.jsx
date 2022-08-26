import { Link } from "react-router-dom";
import "./styles/Navbar.css";
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Barbell Flies
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
