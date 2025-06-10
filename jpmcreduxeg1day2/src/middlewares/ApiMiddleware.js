import {
  FETCHED_TODO,
  FETCH_TODO,
  FETCH_TODO_ID,
  POST_FORM,
  POST_FORM_SUCCESS,
} from "../ActionType";

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

      if (action.type === FETCH_TODO_ID) {
        fetch("https://jsonplaceholder.typicode.com/todos/" + action.todoId)
          .then((data) => data.json())
          .then((data) => dispatch({ type: FETCHED_TODO, data: data }));
      }

      if (action.type === POST_FORM) {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify(action.form),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) =>dispatch({type:POST_FORM_SUCCESS,result:json}));
      }
    }
    next(action);
  };

export default ApiMiddleware;
