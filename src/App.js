import React from 'react';
import MovieCard from './Components/movieCard';
import MovieList from './Components/movieList';
import Filter from './Components/filter';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue dans mon application de films</h1>
      <MovieCard />
      <MovieList />
      <Filter />
    </div>
  );
}

export default App;
