import React from "react";
import { Counter } from "./Counter";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faMinus,
  faMinusCircle,
  faMinusSquare
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faMinus,
  faMinusCircle,
  faMinusSquare
);
function App() {
  const handleChangeCounter = (count) => {
    console.log("count", count);
  };

  return (
    <Counter onChange={handleChangeCounter}>
      <Counter.Decrement icon="minus" />
      <Counter.Label>Counter</Counter.Label>
      <Counter.Count max={10} />
      <Counter.Increment icon="plus" />
    </Counter>
  );
}

export  default App;
