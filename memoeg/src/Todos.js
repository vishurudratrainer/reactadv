import { useState, useMemo } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [total, setTotal] = useState(0);
  const fetchTodos = () =>
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((data) => data.json())
      .then((data) => {
        setTodos(data);
        setTotal(calculateTotal(data));
      });
  const calculateTotal = (data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum = sum + data[i].id;
    }
    return sum;
  };
  const finalTotalValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < todos.length; i++) {
      sum = sum + todos[i].id;
    }
    return sum;
  }, [todos]);

  return (
    <div>
      <button onClick={fetchTodos}>Fetch</button>
      <h1>Total{total}</h1>
      <h1>Total{finalTotalValue}</h1>

      <h1>{JSON.stringify(todos)}</h1>
    </div>
  );
}
