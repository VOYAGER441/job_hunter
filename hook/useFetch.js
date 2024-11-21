import { useState, useEffect } from "react";
import axios from "axios";
// import { API_KEY } from "@/env";
// import { API_KEY } from "@env";
// console.log(API_KEY);

// const rapidAPI=API_KEY;
console.log('ppppppp');

console.log(process.env.API_KEY);
console.log('xxxxxxxxxx');


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": `${process.env.API_KEY}`,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, reFetch: fetchData };
};

export default useFetch;
