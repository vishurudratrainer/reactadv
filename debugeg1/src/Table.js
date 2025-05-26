export default function Table(props) {
  if (props.tableData.length === 0) {
    return <h1>No data</h1>;
  } else {
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th> <th>USERID</th> <th>TITLE</th>
            <th>COMPLETED</th>
          </tr>
          {props.tableData.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.userId}</td>
              <td>{data.title}</td>
              <td>{data.completed === true ? "true" : "false"}</td>
            </tr>
          ))}
        </thead>
      </table>
    );
  }
}
