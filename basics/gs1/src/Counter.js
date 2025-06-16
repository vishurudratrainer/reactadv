import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [action, setAction] = useState("");

  const increment = () => {
    setCounter(counter + 1);
    setAction("INCREMENT");
  };

  const incrementBy2 = () => {
    setCounter(counter + 2);
    setAction("INCREMENTBY2");
  };

  const decrement = () => {
    setCounter(counter - 1);
    setAction("DECREMENT");
  };

  return (
    <div>
      <h1>
        Counter {counter} Action :{action}
      </h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={incrementBy2}>INCREMENT BY 2</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
};

export default Counter;
