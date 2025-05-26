const TodosMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action) {
      if (action.type === "FETCH_TODO") {
        fetch("https://jsonplaceholder.typicode.com/todos/")
          .then((data) => data.json())
          .then((data) => dispatch({ type: "FETCHED_TODO", data: data }));
      }
      if (action.type === "FETCH_TODO_ID") {
        fetch("https://jsonplaceholder.typicode.com/todos/"+action.todoId)
          .then((data) => data.json())
          .then((data) => dispatch({ type: "FETCHED_TODO", data: [data] }));
      }
    }

    next(action);
  };

export { TodosMiddleware };
