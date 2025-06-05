import { useState } from "react";

export default function Counter(){

    const[counter,setCounter]=useState(0)
    const increment =()=>setCounter(counter+1)
    const decrement =()=>setCounter(counter-1)


    return(<div>
        <button onClick={increment}>Increment</button>
        <br/>
        <button onClick={decrement}>Decrement</button>

        <h1>{counter}</h1>
    </div>)

}