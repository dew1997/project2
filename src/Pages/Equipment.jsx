function Equipment({ id, name, setEquipmentId }) {
  return (
    <div>
      <input
        type="radio"
        name="muscles"
        id={id}
        onClick={(event) => setEquipmentId(event.target.id)}
      />
      <label>{name} </label>
      <label>{id}</label>
    </div>
  );
}

export default Equipment;
