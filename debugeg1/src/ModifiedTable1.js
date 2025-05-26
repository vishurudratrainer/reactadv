export default function ModifiedTable1(props) {
  if (props.tableData.length === 0) {
    return <h1>No data</h1>;
  } else {
    return (
      <table border={1}>
        <thead>
          <tr>
            {props.properties.map((property) => (
              <th>{property}</th>
            ))}
          </tr>
          {props.tableData.map((data) => (
            <tr>
              {props.properties.map((property) => (
                <td>{data[property].toString()}</td>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    );
  }
}
