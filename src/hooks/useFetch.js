import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function useFetch(url) {
  const {data, error, isLoading: loading} = useSWR(url, fetcher);
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setData(data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, [url]);
  return { data, error, loading };
}
