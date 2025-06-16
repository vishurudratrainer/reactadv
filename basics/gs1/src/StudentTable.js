export default function StudentTable(props) {
  if (props.studentData.length === 0) {
    return <div>No data</div>;
  } else {
    return (
      <div>
        <h1>{props.pageName}</h1>

        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.studentData.map((row) => (
              <tr>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.address}</td>
                <td><button name={row.name} onClick={props.deleteByName}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
