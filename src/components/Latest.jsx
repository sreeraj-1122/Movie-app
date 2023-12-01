import React, { useContext, useEffect, useState } from 'react'
import {LatestMovies} from './Api'
import "../styles/Popular.css";
import {imageUrl} from './Api'

import axios from 'axios';
import { Newcontext } from '../App';
import { Link } from 'react-router-dom';
function Latest() {
const {latest,setLatest}=useContext(Newcontext)

  // useEffect(() => {
  //   getData1();
  // }, []);
  // const getData1 = async () => {
  //   let response1 = await axios.get(LatestMovies);
  //   setLatest(response1.data.results);
  //   // console.log(response1.data);
  // };

  return (
    <div>
       <h1 className="main-head">Latest Movies</h1>
      <div className="underline"></div>

      <section className="main-card">
        {latest.map((value) => (
          <>
              <Link to={`/details/${value.id}`} className="text-decoration-none ">

            <div className="card">
              <div className="movie-img">
              <img
                  src={`${imageUrl}${value.poster_path}`}
                  alt=""
                />
              </div>
              <h3>{value.title}</h3>
            </div>
            </Link>
          </>
        ))}
      </section>
    </div>
  )
}

export default Latest