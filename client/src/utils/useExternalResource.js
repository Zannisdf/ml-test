import { useState, useEffect } from "react";

import { LOADING, OK, ERROR } from "./loadStatus";

const useExternalResource = (initialState, url) => {
  const [resource, setResource] = useState(initialState);
  const [status, setStatus] = useState(LOADING);

  useEffect(() => {
    setStatus(LOADING);
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchItem = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          signal
        });
        const resourceData = await response.json();

        setResource(resourceData);
        setStatus(response.status >= 200 && response.status < 300 ? OK : ERROR);
      } catch (err) {
        console.log(err.name === "AbortError" ? "Fetch aborted" : err);
      }
    };

    fetchItem();
    return () => controller.abort();
  }, [url]);
  return [resource, status];
};

export default useExternalResource;
