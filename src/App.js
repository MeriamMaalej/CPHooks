import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import Filter from './Filter';
import Photo1 from "../src/photo1.jpg"
import Photo2 from "../src/photo2.jpg"
import Photo3 from "../src/photo3.jpg"
import Photo4 from "../src/photo4.jpg"
import { useState } from 'react';
function App() {
  const objMovies=[
    { title:"Heredite", description:"C'est un film d'horreur. ", img:Photo1, rate:3},
    { title:"Turning", description:"C'est un film d'horreur.", img:Photo2, rate:2},
    { title:"Le calendrier", description:"C'est un film d'horreur.", img:Photo3, rate:4},
    { title:"Scary stories", description:"C'est un film d'horreur.", img:Photo4 , rate:1},
    { title:"A", description:"C'est un film d'horreur.", img:Photo4 , rate:4},
    { title:"B", description:"C'est un film d'horreur.", img:Photo4 , rate:5},

  ]
  const [filtredFilms, setFiltredFilms] = useState(objMovies)

  const handelChange=(item)=>{
  let filter = objMovies.filter((val)=>val.title.toLowerCase().includes(item.toLowerCase()));
  console.log(filter)
  setFiltredFilms(filter)
  }
  
  const ratingChanged = (newRating) => {
  console.log(newRating)
  let filter = objMovies.filter((val)=> val.rate === newRating);
  console.log(filter)
  
  setFiltredFilms(filter)
  };
  return (
  <div className="App">
  <Filter changeFn={handelChange} ratingFilter={ratingChanged}/>
  
  <MovieList obj={filtredFilms}/>
  </div>
  );
  }
  
  export default App;
