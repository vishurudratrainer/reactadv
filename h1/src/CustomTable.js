export default function CustomTable(props) {
  if (props.data.length === 0) {
    return <div>No data</div>;
  }
  return (
    <div>
      <table border={1}>
        <tr>
          {props.columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
        {props.data.map((row) => (
          <tr>
            <td>{row.id}</td>
            <td>{row.userId}</td>
            <td>{row.title}</td>
            <td>{row.completed.toString()}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
