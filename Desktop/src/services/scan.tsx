import { useEffect } from "react";

const ScanService = (url: RequestInfo) => {
  console.log(url)
  useEffect(() => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.body);
      res.json();
    });
  }, [url]);

};

export default ScanService;
