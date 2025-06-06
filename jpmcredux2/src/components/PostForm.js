import { useSelector, useDispatch } from "react-redux";
import { CAPTURE_FORM_DATA, POST_FORM_DATA } from "../ActionType";

export default function PostForm() {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.post);
  const captureChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: CAPTURE_FORM_DATA, formData:{[name]:value}});
  };
  const save = e=>{
    e.preventDefault()
    dispatch({type:POST_FORM_DATA})
  }

  return (
    <div>
      <form onSubmit={save}>
        <label>
          Enter title <input name="title" onChange={captureChange} />
        </label>
        <br />
        <label>
          Enter userId <input name="userId" onChange={captureChange} />
        </label>
        <br />
        <label>
          Enter body <input name="body" onChange={captureChange}/>
        </label>
        <br />
        <button type="submit">Post</button>
      </form>
      <h1>{JSON.stringify(postData)}</h1>
    </div>
  );
}
