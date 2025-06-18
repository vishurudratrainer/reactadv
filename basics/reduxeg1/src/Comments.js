import {useDispatch,useSelector} from "react-redux"
import { FETCH_COMMENTS } from "./ActionType";
const Comments = () => {
    const dispatch = useDispatch()
    const data = useSelector(state=>state)
    const fetchComments =()=>dispatch({type:FETCH_COMMENTS})

  return (
    <div>
      <button onClick={fetchComments}>FETCH_COMMENTS</button>
      <h1>{JSON.stringify(data.comments.comments)}</h1>
    </div>
  );
};

export default Comments;
