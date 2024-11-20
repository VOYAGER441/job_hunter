import { useState, useEffect } from "react";
import axios from "axios";
// import {API_KEY} from '/@env';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLading] = useState(false);
  const [error, setError] = useState(null);
console.log(process.env.API_KEY);
// console.log(API_KEY);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLading(false);
    } catch (error) {
      console.error(error);
      
      setError(error);
      alert("There is an error");
    } finally {
      setIsLading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch
// import React from 'react'

// const useFetch = () => {
//   return (
//     <div>useFetch</div>
//   )
// }

// export default useFetch
