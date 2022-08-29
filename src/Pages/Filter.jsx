function Filter(props) {
  return (
    <>
      <input type="radio" name="muscles" />
      <label>{props.name} </label>
      <label>{props.bodyid} </label>
      <label>{props.equipmentid}</label>
    </>
  );
}

export default Filter;
