import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  workout: localStorage.getItem("workout")
    ? JSON.parse(localStorage.getItem("workout"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("workout", JSON.stringify(state.workout));
  }, [state]);

  const addExerciseToWorkout = (exercise) => {
    dispatch({ type: "ADD_EXERCISE_TO_WORKOUT", payload: exercise });
  };

  const removeExerciseFromWorkout = (id) => {
    dispatch({ type: "REMOVE_EXERCISE_FROM_WORKOUT", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        workout: state.workout,
        addExerciseToWorkout,
        removeExerciseFromWorkout,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
