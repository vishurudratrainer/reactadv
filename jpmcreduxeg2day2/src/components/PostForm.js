import { useSelector, useDispatch } from "react-redux";
import { CAPTURE_FORM, POST_FORM } from "../ActionType";

const PostForm = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postForm);
  const capture = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: CAPTURE_FORM, form: { [name]: value } });
  };
  const send = (e) => {
    e.preventDefault();
    dispatch({ type: POST_FORM, form: postData.form });
  };
  return (
    <div>
      <form onSubmit={send}>
        <label>
          Enter title <input name="title" onChange={capture} />
        </label>
        <br />
        <label>
          Enter userId <input name="userId" onChange={capture} />
        </label>
        <br />
        <label>
          Enter body <input name="body" onChange={capture} />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      <h1>{JSON.stringify(postData)}</h1>
    </div>
  );
};

export default PostForm;
