import { FETCH_DOG, FETCHED_DOG } from "../ActionType";
//Middleware will fetch data and triggere new action with data
const DogMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action) {
      if (action.type === FETCH_DOG)
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((data) => data.json())
          .then((data) => dispatch({ type: FETCHED_DOG, data: data }));
}
    next(action);//next will take u to next middleware if no middlewares then we will go to reducer
  };

export { DogMiddleware };
