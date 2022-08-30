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
              <div key={exercise.id}>
                <h3>{exercise.name} </h3>
                <p>{exercise.description.replace(/(<([^>]+)>)/gi, "")}</p>
                <button onClick={() => removeExerciseFromWorkout(exercise.id)}>
                  Remove from list
                </button>
              </div>
            </>
          ))}
        </div>
      ) : (
        <h3>Add some exercises to see your custom workout!</h3>
      )}
    </div>
  );
}

export default Workout;
