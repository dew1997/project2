import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
function Workout() {
  const { workout } = useContext(GlobalContext);
  return (
    <div>
      {workout.map((exercise) => {
        <div>
          <h3>{exercise.name} </h3>
          <p>{exercise.description}</p>
        </div>;
      })}
    </div>
  );
}

export default Workout;
