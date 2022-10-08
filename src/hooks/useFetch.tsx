import { useEffect, useState } from "react";

const useFetch = (endpoint: any) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const fetchedData = await fetch(endpoint);
        const loadedData = await fetchedData.json()
        setData(loadedData?.products)
        setLoading(false);
      } catch (err) {
        setError(err as string)
        setLoading(false);
      }
    })();
  }, []);

  return [loading, data, error] as const;
};

export default useFetch;
