import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
function Workout() {
  const { removeExerciseFromWorkout } = useContext(GlobalContext);
  const { workout } = useContext(GlobalContext);
  return (
    <div className="relative p-8 text-center border border-gray-200 rounded-lg">
      {workout.length > 0 ? (
        <div className="relative p-8 text-center border border-gray-200 rounded-lg">
          {workout.map((exercise) => (
            <div key={exercise.id}>
              <h3 className=" text-4xl font-bold">{exercise.name} </h3>
              <p>{exercise.description.replace(/(<([^>]+)>)/gi, "")}</p>
              <button onClick={() => removeExerciseFromWorkout(exercise.id)}>
                Remove from list
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative p-8 text-center border border-gray-200 rounded-lg">
          <h2 className="text-2xl font-medium">There is nothing here...</h2>
          <p className="mt-4 text-sm text-gray-500">
            Added exercise will appear here, try adding some!
          </p>
        </div>
      )}
    </div>
  );
}

export default Workout;
