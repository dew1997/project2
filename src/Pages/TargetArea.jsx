function TargetArea({ body, setBodyId }) {
  return (
    <div className="relative p-8 text-center border border-gray-200 rounded-lg">
      <h1 className="text-xl font-bold w-full sm:text-2xl pb-2">Target Area</h1>
      {body.map((info) => (
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
      ))}
    </div>
  );
}

export default TargetArea;
