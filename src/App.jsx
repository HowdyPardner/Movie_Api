import { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  const [movie, setMovie] = useState(null);
  const apiKey = "98e3fb1f";

  const getMovie = async (searchTerm) => {
    
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
  
      const data = await response.json();

      setMovie(data);
    } catch(e){
      console.error(e)
    }

    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovie("Jingle All The Way");
  }, []);


  return (
    <div className="App">
      <MovieDisplay movie={movie} />
      <Form moviesearch={getMovie} />
    </div>
  );
}

export default App
