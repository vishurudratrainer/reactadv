
import { useSelector, useDispatch } from "react-redux";
import { FETCH_DOG } from "../ActionType";

export default function Dog(){
    const dispatch = useDispatch()
    const dogData = useSelector(state=>state.dog.dog)
    const dispatchDog = ()=>dispatch({type:FETCH_DOG})

    return(<div>
        <button onClick={dispatchDog}>Fetch Dog</button><br/>
        {JSON.stringify(dogData)}
        <br/>
        <img src={dogData} alt="No nothing found"/>
    </div>)

}
