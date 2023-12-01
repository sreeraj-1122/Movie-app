import Home from "./components/Home";
import MovieNavbar from "./components/MovieNavbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Movies from "./components/Movies";
import Popular from "./components/Popular";
import Latest from "./components/Latest";
import Comedy from "./components/Comedy";
import Details from "./components/Details";
import {LatestMovies, PopularMovies} from './components/Api'
import { ComedyMovies } from "./components/Api";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Newcontext = createContext();

function App() {
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [apidata,setApidata]=useState([])
  const [movie,setMovie]=useState(null)

  useEffect(() => {
    axios.get(PopularMovies).then((response) => {
      setPopular(response.data.results);
    });
    axios.get(ComedyMovies).then((response2) => {
      setComedy(response2.data.results);
    });
    axios.get(LatestMovies).then((response1) => {
      setLatest(response1.data.results);
    });
    
   
  }, []);
  
  return (  
    <div >
    
      <Newcontext.Provider value={{popular,setPopular,latest,setLatest,comedy, setComedy,apidata,setApidata,movie,setMovie}}>
      <BrowserRouter>
      <MovieNavbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/latest" element={<Latest/>}/>
        <Route path="/comedy" element={<Comedy/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
      
      </BrowserRouter>
      </Newcontext.Provider>
      
    </div>
  );
}

export default App;
