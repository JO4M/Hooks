import React from "react";

function MovieCard(props) { //
    return (
        <div className="movie-card"  >
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <img src={props.posterUrl} alt={props.title} />
            <p><strong>Rating: </strong>{props.rating}</p>
        </div>
    );
}
export default MovieCard;