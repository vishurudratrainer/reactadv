import { FETCHED_TODO, FETCH_TODO } from "../ActionType";

const ApiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action) {
      console.log("Inside Api Middleware");
      if (action.type === FETCH_TODO) {
        fetch("https://jsonplaceholder.typicode.com/todos/")
          .then((data) => data.json())
          .then((data) => dispatch({ type: FETCHED_TODO, data: data }));
      }
    }
    next(action);
  };

export default ApiMiddleware;
