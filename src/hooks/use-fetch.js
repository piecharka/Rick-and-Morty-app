import { useState, useCallback, useEffect } from "react";
const useFetch = (url, { skip = false }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = useCallback(async () => {
    try {
      if (skip) return;
      setIsLoading(true);
      const json = await fetch(url)
        .then((response) => response.json())
        .then((data) => data);
      setData(json);
      setIsLoading(false);
    } catch (e) {
      console.log(e.Message);
    }
  }, [skip, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const isError = !!(data && data.error);

  return !skip ? [data, isLoading, isError] : [[], false, false];
};

export default useFetch;
