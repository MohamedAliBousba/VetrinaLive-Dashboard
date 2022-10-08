import { useEffect, useState } from "react";

interface IProduct {
  brand?: string;
  category?: string;
  description?: string;
  discountPercentage?: number;
  id?: number;
  images?: string[];
  price?: number;
  rating?: number;
  stock?: number;
  thumbnail?: string;
  title?: string;
}

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<IProduct[]>([]);
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
