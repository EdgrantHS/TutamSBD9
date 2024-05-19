import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getMovieDetails } from "../actions/Movie.actions";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await getMovieDetails(movieId);
      setDetails(response.data);
      console.log(response.data);
    };

    fetchDetails();
  }, [movieId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gradient-to-t from-gray-950 to-gray-900 w-dvw min-h-screen'>
      <h1 className="
          w-dvw
          text-4xl text-white text-center font-bold pb-8
          bg-gradient-to-t from-gray-900 to-indigo-950
          drop-shadow-xl rounded-b-full"
      >Movie Detail</h1>

      <div className="w-sreen h-fit py-8 mx-16 flex gap-x-12 align-center justify-center flex-wrap">
        <img src={"https://media.themoviedb.org/t/p/w300_and_h450_bestv2" + details.poster_path} alt={details.title} 
          className="min-h-[30rem] rounded-2xl" 
        />

        <div className="w-fit h-1/2 flex flex-col items-center">
          <div className="
          flex flex-col items-center justify-start
          w-[30rem] min-h-[30rem] h-fit gap-4 p-4
          text-white
          bg-gradient-to-t from-gray-900 to-gray-950 rounded-2xl
          shadow-xl
          border-2 
        ">
            <div>
              <p className="font-bold text-3xl pt-4 text-center">{details.title}</p>
              <p className="font-semibold text-xl pt-4 text-center">{details.release_date}</p>
            </div>
            <p className="w-full text-center pt-8 px-8">{details.overview}</p>
            <p className="w-full text-center pt-8 px-8"><b>Language: </b>{details.original_language == "en" ? "English" : details.original_language}
              <br />
              <b>Rating: </b>{details.vote_average}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
