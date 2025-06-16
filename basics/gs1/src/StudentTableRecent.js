export default function StudentTableRecent({studentData,pageName}) {
  if (studentData.length === 0) {
    return <div>No data</div>;
  } else {
    return (
      <div>
        <h1>{pageName}</h1>

        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((row) => (
              <tr>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
