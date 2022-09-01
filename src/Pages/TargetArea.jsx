function TargetArea({ body, setBodyId }) {
  return (
    <div className="relative p-8 text-center border border-gray-200 rounded-lg">
      <h1 className="text-xl font-bold w-full sm:text-2xl pb-2">Target Area</h1>
      {body.map((info) => (
        <div
          className="flex items-center justify-between p-4 text-sm font-medium  py-5"
          key={info.id}
        >
          <input
            type="radio"
            className=""
            name="filter"
            value={info.name}
            id={info.id}
            onClick={(event) => setBodyId(event.target.id)}
          />
          <label className=" grid-flow-row">
            <span className="block mt-1 text-xs text-gray-500">
              {info.name}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default TargetArea;
