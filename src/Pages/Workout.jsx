import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
function Workout() {
  const { removeExerciseFromWorkout } = useContext(GlobalContext);
  const { workout } = useContext(GlobalContext);
  return (
    <div>
      <h1>Your custom workout</h1>
      {workout.length > 0 ? (
        <div>
          {workout.map((exercise) => (
            <>
              <h3>{exercise.name} </h3>
              <p>{exercise.description}</p>
              <button onClick={() => removeExerciseFromWorkout(exercise.id)}>
                Remove from list
              </button>
            </>
          ))}
        </div>
      ) : (
        <h3>no exercise</h3>
      )}
    </div>
  );
}

export default Workout;
