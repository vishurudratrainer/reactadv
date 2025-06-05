import DynamicTable from "./DynamicTable";
import RestApiInstance from "../resthelper/RestApiInstance";
import withDataFetch from "./hoc/withDataFetch";
const fetchTodos = async () => {
  /** fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((res) => {
        setColumns(getColumns(res[0]));
        setTodos(res);
      }); */
  const response = await RestApiInstance.get("todos/");
  const data = await response.data
  return data;
};

function TodosFetch1({ data, isLoading, error }) {
  const getColumns = (data) => {

    if(data.length===0)
      return []
    let header = [];
    for (let property in data[0]) {
      header.push(property);
    }
    return header;
  };
    if(isLoading){
      return (<div><h1>Loading</h1></div>)
    }
  return (
    <div>
      <h1>Todos fetch example</h1>
      <DynamicTable data={data} columns={getColumns(data)}/>

    </div>
  );
}

export default withDataFetch(TodosFetch1, fetchTodos);
