const FallbackError = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>Something went wrong</p>
      <pre style={{ color: "red" }}>{JSON.stringify(error)}</pre>

      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

export default FallbackError;
