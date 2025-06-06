import { FETCH_TODOS, FETCHED_TODOS } from "../actions/ActionType";

const TodosMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action) {
      if (action.type === FETCH_TODOS)
        fetch("https://jsonplaceholder.typicode.com/todos/")
          .then((data) => data.json())
          .then((data) => dispatch({ type: FETCHED_TODOS, todosData: data }));
    }
    next(action);
  };

export { TodosMiddleware };
