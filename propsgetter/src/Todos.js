import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () =>
    fetch("")
      .then((data) => data.json())
      .then((data) => setTodos(data));

function getButtonProps() {
  return {
    text: "GET TODO",
    value :"GET TODO"
  };
}


  return <div>
     <button {...getButtonProps()} ></button>

  </div>;
}
