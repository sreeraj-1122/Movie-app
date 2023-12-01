import React, { useContext, useEffect, useState } from "react";
import { ComedyMovies } from "./Api";
import axios from "axios";
import { imageUrl } from "./Api";
import { Link } from "react-router-dom";
import { Newcontext } from "../App";
function Comedy() {
  const { comedy, setComedy } = useContext(Newcontext);
  // useEffect(() => {
  //   axios.get(ComedyMovies).then((response2) => {
  //     setComedy(response2.data.results);
  //   });
  // }, [ComedyMovies]);
  // const getData2 = async () => {
  //   let response2 = await axios.get(ComedyMovies);
  //   setComedy(response2.data.results);
  // };

  return (
    <div>
      <h1 className="main-head">Comedy Movies</h1>
      <div className="underline"></div>

      <section className="main-card">
        {comedy.map((value) => (
          <>
            <Link to={`/details/${value.id}`} className="text-decoration-none ">
              <div className="card">
                <div className="movie-img">
                  <img src={`${imageUrl}${value.poster_path}`} alt="" />
                </div>
                <h3>{value.name}</h3>
              </div>
            </Link>
          </>
        ))}
      </section>
    </div>
  );
}

export default Comedy;
