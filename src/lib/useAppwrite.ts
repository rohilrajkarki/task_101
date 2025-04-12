import { useEffect, useState, useCallback } from "react";

interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
  fn: (params: P) => Promise<T>;
  params?: P;
  skip?: boolean;
}

interface UseAppwriteReturn<T, P> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: (newParams: P) => Promise<void>;
}

//Custom hook for managing Appwrite API calls with state handling
export const useAppwrite = <T, P extends Record<string, string | number>>({
  fn, //The asynchronous function to fetch data
  params = {} as P, //Default fetch parameters
  skip = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (fetchParams: P) => {
      setLoading(true);
      setError(null);

      try {
        const result = await fn(fetchParams);
        setData(result);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
        alert(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [fn] // Memoize the function to ensure stability
  );

  //Automatically fetch data on component mount, unless 'skip'
  useEffect(() => {
    if (!skip) {
      fetchData(params);
    }
  }, []);

  //Refetch function to fetch data with new parameters
  const refetch = async (newParams: P) => await fetchData(newParams);

  return { data, loading, error, refetch };
};
