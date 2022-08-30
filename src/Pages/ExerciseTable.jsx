import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

function ExerciseTable({ exercise }) {
  const { addExerciseToWorkout, workout } = useContext(GlobalContext);

  let storedExercise = workout.find((object) => object.id === exercise.id);

  const workoutDisabled = storedExercise ? true : false;
  return (
    <div>
      <h3>{exercise.name} </h3>
      <p>{exercise.description.replace(/(<([^>]+)>)/gi, "")}</p>
      <button
        disabled={workoutDisabled}
        onClick={() => addExerciseToWorkout(exercise)}
      >
        add to workout
      </button>
    </div>
  );
}

export default ExerciseTable;

// return (
//   <div>
//     {selectedExercise.map((exercise) => (
//       <>
//         <h3>{exercise.name} </h3>
//         <p>{exercise.description.replace(/(<([^>]+)>)/gi, "")}</p>
//         <button
//           disabled={workoutDisabled}
//           onClick={() => addExerciseToWorkout(exercise)}
//         >
//           add to workout
//         </button>
//       </>
//     ))}
//   </div>
// );
