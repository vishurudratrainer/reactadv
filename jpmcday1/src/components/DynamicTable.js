export default function StaticTable({ columns, rows }) {
  if (rows.length === 0) {
    return <div>No data</div>;
  } else {
    return (
      <table border={1}>
        <tr>
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
        {rows.map((row, index) => {
          return (
            <tr>
              {columns.map((column) => (
                <td>{row[column]+""}</td>
              ))}
            </tr>
          );
        })}
      </table>
    );
  }
}
