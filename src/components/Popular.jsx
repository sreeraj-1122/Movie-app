import React, { createContext, useContext, useEffect, useState } from "react";
import { PopularMovies } from "./Api";
import "../styles/Popular.css";
import { imageUrl } from "./Api";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Details from "./Details";
import { Newcontext } from "../App";


function Popular() {  
const {popular,setPopular}=useContext(Newcontext)  
  

  return (

      <div>
        <h1 className="main-head">Popular Movies</h1>
        <div className="underline"></div>

        <section className="main-card">
          {popular.map((value) => (
            <>
              <Link to={`/details/${value.id}`} className="text-decoration-none ">
                <div className="card">
                  <div className="movie-img">
                    <img src={`${imageUrl}${value && value.poster_path}`} alt="" />
                  </div>
                  <h3>{value ? value.title||value.original_title||value.original_name : ""}</h3>
                </div>
              </Link>
            </>
          ))}
        </section>
   


      </div>
  );
}

export default Popular;
