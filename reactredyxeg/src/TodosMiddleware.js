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
    }

    next(action);
  };

export { TodosMiddleware };
