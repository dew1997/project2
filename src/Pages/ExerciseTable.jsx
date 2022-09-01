import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

function ExerciseTable({ exercise }) {
  const { addExerciseToWorkout, workout } = useContext(GlobalContext);

  let storedExercise = workout.find((object) => object.id === exercise.id);

  const workoutDisabled = storedExercise ? true : false;
  return (
    <div className=" relative p-8 text-center border border-gray-200 rounded-lg">
      <h3>{exercise.name} </h3>
      <p> {exercise.description.replace(/(<([^>]+)>)/gi, "")}</p>
      <button
        className=""
        disabled={workoutDisabled}
        onClick={() => addExerciseToWorkout(exercise)}
      >
        add to workout
      </button>
    </div>
  );
}

export default ExerciseTable;
