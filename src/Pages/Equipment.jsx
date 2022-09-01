function Equipment({ equipment, setEquipmentId }) {
  return (
    <div className="relative p-8 text-center border border-gray-200 rounded-lg">
      <h1 className="text-xl font-bold w-full sm:text-2xl pb-2">Equipments</h1>
      {equipment.map((info) => (
        <div className="space-y-4" key={info.id}>
          <input
            type="radio"
            className=""
            name="filter"
            id={info.id}
            onClick={(event) => setEquipmentId(event.target.id)}
          />
          <label>
            <span>{info.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default Equipment;
