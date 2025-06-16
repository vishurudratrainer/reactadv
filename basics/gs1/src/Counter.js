import { useState } from "react"


const Counter = ()=>{
    const [counter,setCounter]=useState(0)
    const increment=()=>setCounter(counter+1)

    return(<div>
        <h1>Counter {counter}</h1>
        <button onClick={increment}>INCREMENT</button>
    </div>)
}

export default Counter;