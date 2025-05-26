import { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);

  //     variable,setter function to set variable

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div>
      <h1>Counter {counter}</h1>
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
