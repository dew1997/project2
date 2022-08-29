function TargetArea({ id, name, setBodyId }) {
  return (
    <div>
      <input
        type="radio"
        name="muscles"
        id={id}
        onClick={(event) => setBodyId(event.target.id)}
      />
      <label>{name} </label>
      <label>{id} </label>
    </div>
  );
}

export default TargetArea;
