import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import tvapi from "../apis/tvapi";

import TvShow from "./Pages/TvShow";
import TvShows from "./Pages/TvShows";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await tvapi.get("search/shows?q=all");

      setMovies(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Route path="/" exact component={() => <TvShows movies={movies} />} />
        <Route
          path="/pg2:id"
          exact
          component={() => <TvShow movies={movies} />}
        />
      </Router>
    </>
  );
};

export default App;
