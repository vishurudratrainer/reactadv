import { useDispatch, useSelector } from "react-redux";

export default function Dogs() {
  const dispatch = useDispatch();
  const message = useSelector((data) => data.dog.message);
  const todoFetch = () => {
    dispatch({ type: "FETCH_DOGS" });
  };

  return (
    <div>
      <button onClick={todoFetch}>Fetch Dog</button>
      <br/>
      {message.length === 0 ? <div></div> : <img src={message} width={"300"} alt="No"></img>}
    </div>
  );
}
