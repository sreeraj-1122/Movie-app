import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import bgimage from "../assets/home.jpg";

import { imageUrl } from "./Api";
import "../styles/Details.css";
import { Newcontext } from "../App";
function Details() {
  const { apidata,setApidata ,movie,setMovie } = useContext(Newcontext);
  const { id } = useParams();
  const userId = parseInt(id);

  let currentData = apidata.find((item) => item.id === userId);
  console.log(currentData); 

  return (
    <div className="detail-body">
      <div className="bg-img">
        <img src={`${imageUrl}${currentData.backdrop_path}`} alt="" />
      </div>
     
      <div className="movie-details-body">
        <div className="img-section">
          <img src={`${imageUrl}${currentData.poster_path}`} alt="" />
        </div>
        <div className="content-section">
          <h1>{currentData.original_name || currentData.original_title}</h1>
          <p className="small-desc">
            Language: {currentData.original_language}
          </p>
          <p className="rating">
            {currentData.vote_average} || {currentData.vote_count} Votes
          </p>
          <p>popularity: {currentData.popularity}</p>
          <p>Release date:{currentData.release_date } </p>
          <h2>Overview</h2>
          <p>{currentData.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
