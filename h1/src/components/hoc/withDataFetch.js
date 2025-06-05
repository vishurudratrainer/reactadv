import { useState, useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
export default function withDataFetch(WrappedComponent, fetchData) {
  return function (props) {
    const { showBoundary } = useErrorBoundary();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchWrapper = async () => {
        try {
          setTimeout(async () => {
            const data = await fetchData(props);
            setData(data);
            setIsLoading(false);
          }, 5000);
        } catch (error) {
          setError(error);
          showBoundary(error);
          setIsLoading(false);
        }
      };
      fetchWrapper();
    }, [props]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    );
  };
}
