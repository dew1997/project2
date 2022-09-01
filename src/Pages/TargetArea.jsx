function TargetArea({ body, setBodyId }) {
  return (
    <div className="relative p-8 text-center border border-gray-200 rounded-lg">
      <h1 className="text-xl font-bold w-full sm:text-2xl pb-2">Target Area</h1>
      {body.map((info) => (
        <div key={info.id}>
          <input
            type="radio"
            className="w-6 h-6 border-gray-200"
            name="filter"
            id={info.id}
            onClick={(event) => setBodyId(event.target.id)}
          />
          <label className="ml-2 text-sm font-medium text-gray-900 ">
            <span>{info.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default TargetArea;
