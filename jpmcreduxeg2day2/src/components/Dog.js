import { useSelector, useDispatch } from "react-redux";
import { FETCH_DOG } from "../ActionType";

const Dog = () => {
  const dispatch = useDispatch();
  const dogImage = useSelector((state) => state.dog.message);
  const dogDispatch = () => dispatch({ type: FETCH_DOG });
  return (
    <div>
      <button onClick={dogDispatch}>Fetch dog</button>
      <br />
      <img src={dogImage} alt="not able to download" />
    </div>
  );
};

export default Dog