import React from "react";
import { useParams, Link } from "react-router-dom"; // Utiliser useParams pour récupérer l'id du film

const MovieDetail = () => {
  const { title } = useParams(); // On suppose que le titre est passé dans l'URL
  const movieData = {
    "The Purge": {
      description: "La nuit où ils libèrent la bête (famille)",
      trailerUrl: "https://www.youtube.com/watch?v=xyz123",
    },
    "The Purge Anarchy": {
      description: "La nuit où ils libèrent la bête (vengeance)",
      trailerUrl: "https://www.youtube.com/watch?v=abc456",
    },
  };

  const movie = movieData[title]; // Chercher les données du film en fonction du titre

  return (
    <div>
      <h2>{title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerUrl}
        title="Bande-annonce"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default MovieDetail;
