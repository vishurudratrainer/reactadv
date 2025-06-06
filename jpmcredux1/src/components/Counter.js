import { useDispatch, useSelector } from "react-redux";
import { INC,DEC } from "../actions/ActionType";
export default function Counter() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.counter.counter);
  const inc = () => {
    dispatch({ type: INC }); //Dispatching an action
  };
  const dec = () => {
    dispatch({ type: DEC}); //Dispatching an action
  };
  return (
    <div>
      <button onClick={inc}>Increment</button>
      <br />
      <button onClick={dec}>Decrement</button>
      <br />
      <h1>Counter {data}</h1>
    </div>
  );
}
