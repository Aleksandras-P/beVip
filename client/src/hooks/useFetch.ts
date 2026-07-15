import { useState } from "react";

function useFetch(timeout = 2000) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const makeApiCall = async (url:string) => {
    setLoading(true);
    
    setTimeout(async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setData(error))
        .finally(() => setLoading(false));
    }, timeout);

  };

  return { data, loading, makeApiCall };

};

export default useFetch;
