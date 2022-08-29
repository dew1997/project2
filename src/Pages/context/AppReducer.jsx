export default (state, action) => {
  switch (action.type) {
    case "ADD_EXERCISE_TO_WORKOUT":
      return {
        ...state,
        workout: [action.payload, ...state.workout],
      };
    case "REMOVE_EXERCISE_FROM_WORKOUT":
      return {
        ...state,
        workout: state.workout.filter(
          (exercise) => exercise.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
