import React from "react";
import { Link } from "react-router-dom"; // Importer Link pour la navigation

function MovieCard(props) {
  return (
    <div className="movie-card">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <img src={props.posterUrl} alt={props.title} />
      <p><strong>Rating: </strong>{props.rating}</p>
      {/* Lien vers la page de description du film */}
      <Link to={`/movies/${props.title}`}>Voir plus</Link>
    </div>
    
  );
}

export default MovieCard;
