function Equipment({ equipment, setEquipmentId }) {
  return (
    <div>
      {equipment.map((info) => (
        <div key={info.id}>
          <input
            type="radio"
            className="equipment"
            name="filter"
            id={info.id}
            onClick={(event) => setEquipmentId(event.target.id)}
          />
          <label>{info.name} </label>
          <label>{info.id} </label>
        </div>
      ))}
    </div>
  );
}

export default Equipment;
