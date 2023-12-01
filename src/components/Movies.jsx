import React, { useContext, useEffect, useState } from 'react'
import "../styles/Popular.css";
import {ComedyMovies, LatestMovies, PopularMovies, imageUrl} from './Api'
import axios from "axios";
import { Newcontext } from '../App';
import { Link, useNavigate } from 'react-router-dom';

function Movies() {
  const { popular, setPopular,latest,setLatest,comedy, setComedy ,apidata,setApidata,movie,setMovie } = useContext(Newcontext);
 
  useEffect(()=>{
    
    const combineData=[...popular,...latest,...comedy]
    setApidata(combineData)

  },[popular,latest,comedy])


  return (
    <div>
 
      <h1 className="main-head">Movies</h1>
      <div className="underline"></div>

      <section className="main-card">
      {
        apidata.map((value) => (
          <>
            <Link to={`/details/${value.id}`} className="text-decoration-none ">
              <div className="card" key={value.id} >
                <div className="movie-img">
                  <img src={`${imageUrl}${value && value.poster_path}`} alt="" />
                </div>
                <h3>{value.original_title||value.original_name}</h3>
              </div>
            </Link>
          </>
        ))
      }
      
       
      </section>
    </div>
  )
}

export default Movies