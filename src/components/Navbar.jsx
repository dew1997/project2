import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/">Home Page</Link>
      <Link to="/Exercise">Exercise</Link>
      <Link to="/Workout">Workout</Link>
      <Link to="/About">About</Link>
    </div>
  );
}

export default Navbar;
