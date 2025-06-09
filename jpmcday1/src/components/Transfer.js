import { useNavigate } from "react-router-dom"

const Transfer=()=>{
    const navigate = useNavigate()

    const goTo = ()=>{
            navigate("/todosfetch")
    }
    
    return(<div><button onClick={goTo}>Go to component</button></div>)
}

export default Transfer