import {useDispatch,useSelector} from "react-redux"
const Todos = () => {
    const dispatch = useDispatch()
    const data = useSelector(state=>state)

  return (
    <div>
      <button>FETCH_TODO</button>
    </div>
  );
};

export default Todos;
