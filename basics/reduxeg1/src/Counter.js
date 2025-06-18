import { useDispatch, useSelector } from "react-redux";
import {INC,DEC} from "./ActionType"
const Counter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const inc = () => dispatch({ type: INC });
  const dec = () => dispatch({ type: DEC});

  return (
    <div>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <h1>{JSON.stringify(data.counter.counter)}</h1>
    </div>
  );
};

export default Counter;
