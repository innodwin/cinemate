import { Routes , Route } from "react-router-dom";
import { MovieList , Search , MovieDetail , PageNotFound } from "../pages";

import React from 'react'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
    <Routes>
        <Route path="/"  element={<MovieList title = "Home" apiPath ="movie/now_playing?language=en-US&page=1"/>} />
        <Route path="/movie/:id"  element={<MovieDetail/>} />
        <Route path="movies/popular"  element={<MovieList title ="Popular" apiPath ="movie/popular?language=en-US&page=1"/>} />
        <Route path="movies/top"  element={<MovieList title="Top Rated" apiPath = "movie/top_rated?language=en-US&page=1"/>} />
        <Route path="movies/upcoming"  element={<MovieList title="Upcoming Movies" apiPath = "movie/upcoming?language=en-US&page=1"/>} />
        <Route path="search" element={<Search apiPath="search/multi?include_adult=false&language=en-US&page=1"/>} />
        <Route path="*"  element={<PageNotFound/>} />
    </Routes>
    </div>
  )
}
