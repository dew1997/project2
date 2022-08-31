import { Link } from "react-router-dom";
import Dumbbell from "../images/dumbbell.png";
function Navbar() {
  return (
    <div className="flex items-center justify-between max-w-3xl p-4 mx-auto">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link to="/" className="flex  items-center px-4">
            <img className="h-10 w-10" src={Dumbbell} alt="dumbbelllogo" />
            <h1 className="text-3x1 font-bold mr-4 sm:text-4xl">
              BarbellFlies
            </h1>
          </Link>
        </div>
        <ul className=" md:flex">
          <Link
            className="md:m1-8  text-xl hover:text-gray-400 duration-500 p-4"
            to="/Exercise"
          >
            Exercise
          </Link>
          <Link
            className="md:m1-8 text-xl hover:text-gray-400 duration-500 p-4"
            to="/Workout"
          >
            Workout
          </Link>
          <Link
            className="md:m1-8 text-xl hover:text-gray-400 duration-500 p-4"
            to="/About"
          >
            About
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

// return (
//   <nav className="nav">
//     <Link to="/" className="site-title">
//       <img src={Dumbbell} alt="dumbbelllogo" />
//     </Link>
//     <ul>
//       <Link to="/Exercise">Exercise</Link>
//       <Link to="/Workout">Workout</Link>
//       <Link to="/About">About</Link>
//     </ul>
//   </nav>
// );
// }
