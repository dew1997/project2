function Table(props) {
  return (
    <table>
      <tr>
        <th> Exercise </th>
        <td>{props.name}</td>
        <td>{props.description}</td>
      </tr>
      <button>add to workout</button>
    </table>
  );
}

export default Table;
