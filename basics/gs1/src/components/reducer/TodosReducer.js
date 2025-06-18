/* eslint-disable no-unused-vars */
import { useReducer } from "react";
const CounterReducer = (state = { count: 0 }, action) => {
  if (action) {
    switch (action.type) {
      case "INC":
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  }
  return state;
};

const TodosReducer =()=>{
    const [counter,dispatch] = useReducer(CounterReducer)
    const inc =()=>dispatch({type:"INC"})

    return(<div>
        <button onClick={inc}>INC</button>
        <h1>{JSON.stringify(counter)}</h1>
    </div>)

}

export default TodosReducer
