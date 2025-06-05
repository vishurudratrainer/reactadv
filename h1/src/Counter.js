import { useContext, useState } from "react";
import UserContext from "./UserContext";

export default function Counter(){
    const userContext=useContext(UserContext)

    const[counter,setCounter]=useState(0)
    const increment =()=>setCounter(counter+1)
    const decrement =()=>setCounter(counter-1)


    return(<div>
        <h1>Welcome {userContext.user}</h1>
        <button onClick={increment}>Increment</button>
        <br/>
        <button onClick={decrement}>Decrement</button>

        <h1>{counter}</h1>
    </div>)

}