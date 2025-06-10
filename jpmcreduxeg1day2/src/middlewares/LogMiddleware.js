
const LogMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action) {
      console.log("Inside Logmiddleware",action)
    }
    next(action)
  };

  export default LogMiddleware