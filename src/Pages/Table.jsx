function Table(props) {
  return (
    <div>
      <h1> Exercise </h1>
      <p>{props.name}</p>
      <p> {props.description}</p>
    </div>
  );
}

export default Table;
