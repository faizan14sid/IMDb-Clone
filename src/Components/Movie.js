import React from 'react';
import './component.css';
import StarIcon from '@material-ui/icons/Star'

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className="movie">
     <img src={IMG_API + poster_path} alt={title}/>
     <div className="movie-info">
       <h3>{title}</h3>
       <span> <StarIcon style={{color:"#f5c518"}}/><br/>{vote_average}</span>
     </div>
     <div className="movie-over">
       <h2>overview</h2>
      <p>{overview}</p>
     </div>
    </div>
    
  )
  };
export default Movie
