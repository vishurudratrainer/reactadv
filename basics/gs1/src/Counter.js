import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
    setAction("INCREMENT");
  };

  const decrement = () => {
    setCounter(counter - 1);
    setAction("DECREMENT");
  };
  const [action, setAction] = useState("");

  return (
    <div>
      <h1>Counter {counter} Action :{action}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
};

export default Counter;
