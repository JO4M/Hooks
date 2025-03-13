import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './Components/movieList';
import Filter from './Components/filter';
import MovieDetail from './Components/movieDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bienvenue dans mon application de films</h1>
        
        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:title" element={<MovieDetail />} />
        </Routes>
        
        <Filter />
      </div>
    </Router>
  );
}

export default App;
