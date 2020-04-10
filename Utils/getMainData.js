import { useState, useEffect } from "react";

export default function getMainData(url) {
  const [coronadata, setCoronadata] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function FetchCoronaData() {
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => {
          setError(err);
        });
      setCoronadata(data);
    }
    FetchCoronaData();
  }, [url]);
  return { coronadata, error };
}
