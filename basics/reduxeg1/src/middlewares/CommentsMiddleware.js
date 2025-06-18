import { FETCH_COMMENTS, FETCHED_COMMENTS } from "../ActionType";
//Middleware will fetch data and triggere new action with data
const CommentsMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action) {
      if (action.type === FETCH_COMMENTS)
        fetch("https://jsonplaceholder.typicode.com/comments/")
          .then((data) => data.json())
          .then((data) => dispatch({ type: FETCHED_COMMENTS, data: data }));
}
    next(action);//next will take u to next middleware if no middlewares then we will go to reducer
  };

export { CommentsMiddleware };
