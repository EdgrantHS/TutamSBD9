import React, { useState, useEffect } from "react";
import { fetchMoviesWithAxios } from "./actions/Movie.actions";
import CardGroup from "./component/CardGroup";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const apiResponse = await fetchMoviesWithAxios();
    if (apiResponse.success) {
      //See the result in the console from the browser
      console.log("Response In App.jsx");
      console.log(apiResponse.data);

      setMovies(apiResponse.data);
    } else {
      alert("Failed to fetch movies");
    }
  };

  //useEffect with empty array as second argument will run only once when the component is mounted
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className=" bg-gradient-to-t from-gray-950 to-gray-900">
      <h1 className="
        w-dvw
        text-4xl text-white text-center font-bold pb-8
        bg-gradient-to-t from-gray-900 to-indigo-950
        drop-shadow-xl rounded-b-full"
      >Movie List Page</h1>
      <CardGroup movies={movies} />
    </div>
  );
}

export default App;
