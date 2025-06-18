import {useDispatch,useSelector} from "react-redux"
import { FETCH_DOG } from "./ActionType";
const Dog= () => {
    const dispatch = useDispatch()
    const data = useSelector(state=>state)
    const fetchDog =()=>dispatch({type:FETCH_DOG})

  return (
    <div>
      <button onClick={fetchDog}>FETCH_DOG</button>
      <img src ={data.dogs.message} alt="absent"></img>
    </div>
  );
};

export default Dog;
