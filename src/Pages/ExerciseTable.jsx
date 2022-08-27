function ExerciseTable(props) {
  return (
    <div>
      <h3> Exercise </h3>
      <p>{props.name} </p>
      <p>{props.description}</p>
      <button>add to workout</button>
    </div>
  );
}

export default ExerciseTable;
