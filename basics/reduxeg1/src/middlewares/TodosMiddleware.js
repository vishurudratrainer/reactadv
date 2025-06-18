import { FETCH_TODO, FETCHED_TODO,FETCH_TODO_BY_ID,FETCHED_TODO_BY_ID } from "../ActionType";
//Middleware will fetch data and triggere new action with data
const TodosMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action) {
      if (action.type === FETCH_TODO)
        fetch("https://jsonplaceholder.typicode.com/todos/")
          .then((data) => data.json())
          .then((data) => dispatch({ type: FETCHED_TODO, data: data }));
        if (action.type === FETCH_TODO_BY_ID)
        fetch("https://jsonplaceholder.typicode.com/todos/"+action.todoId)
          .then((data) => data.json())
          .then((data) => dispatch({ type: FETCHED_TODO_BY_ID, data: data }));
    }
    next(action);//next will take u to next middleware if no middlewares then we will go to reducer
  };

export { TodosMiddleware };
