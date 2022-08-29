export default (state, action) => {
  switch (action.type) {
    case "ADD_EXERCISE_TO_WORKOUT":
      return {
        ...state,
        workout: [action.payload, ...state.workout],
      };
    default:
      return state;
  }
};
