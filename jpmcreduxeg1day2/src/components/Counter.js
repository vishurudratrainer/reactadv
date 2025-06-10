import { useDispatch, useSelector } from "react-redux";
import {INC,DEC} from "../ActionType"
export default function Counter() {
  const dispatch = useDispatch();
  const inc = () => {
    dispatch({ type: INC});
  };
  const dec = () => {
    dispatch({ type: DEC});
  };
  const counterData = useSelector((state) => state.counter.count);
  return (
    <div>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <h1>Counter {counterData}</h1>
    </div>
  );
}
