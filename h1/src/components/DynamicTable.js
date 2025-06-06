export default function DynamicTable(props) {
  if (props.data.length === 0) {
    return <div>No data</div>;
  }
  let columns = props.columns;
  let data = props.data;
  return (
    <div>
      <table id="table1" border={1}>
        <tr>
          {props.columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
        {data.map((row) => {
          return ( <tr>{columns.map((column) => {
            return <td>{row[column].toString()}</td>;
          })}</tr>)
        })}
      </table>
    </div>
  );
}
