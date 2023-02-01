import React from 'react'
import { useEffect, useState } from 'react'
import './MovieLand.css'
import searchIcon from './searchIcon.svg'
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apiKey=4da3313';


export default function MovieLand() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async(title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

    setMovies(data.Search);
  };

  //for Static data
// const movies ={
//   Poster: "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
//   Title: "Superman, Spiderman or Batman",
//   Type: "movie",
//   Year: "2011",
//   imdbID: "tt2084949",
// }

  useEffect(()=>{
      searchMovies("Batman");
    },[]);
  
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className="search">
        <input type="text"
        value={searchTerm} 
        onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder="Search For Movies"
        />
        <img src={searchIcon}
         alt="search" 
         onClick={()=>searchMovies(searchTerm)}
         />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
      
    </div>
  );
};
