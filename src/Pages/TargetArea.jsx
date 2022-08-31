function TargetArea({ body, setBodyId }) {
  return (
    <div>
      {body.map((info) => (
        <>
          <div key={info.id}>
            <input
              type="radio"
              className="targetarea"
              name="filter"
              id={info.id}
              onClick={(event) => setBodyId(event.target.id)}
            />
            <label>{info.name} </label>
            <label>{info.id} </label>
          </div>
        </>
      ))}
    </div>
  );
}

export default TargetArea;
