import React, { useEffect, useState } from 'react'

export const useFetch = (url, queryTerm = "") => {
  const parentUrl = "https://api.themoviedb.org/3/";
  const MainUrl = `${parentUrl}${url}&query=${queryTerm}`;
  const [data, setData] = useState([]);
  var error = "";
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
  };
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(MainUrl, options);
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        setData([]);
        error = "Failed! could not load data, try again";
      }
     
    }
    fetchMovies();
  }, [MainUrl])
  return { data:data,log:error }
}
