import React from 'react'

const MovieDisplay = ({movie}) => {

    // will return the data info
    const loaded = () => {
        return (
            <>
                <h1>{movie.Title}</h1>
                <h2>{movie.Genre}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>
            </>
        );
    };

    //function to return loading JSX
    const loading = () => {
        return <h1>No Movie to Display</h1>;
    };

    //ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
};

export default MovieDisplay