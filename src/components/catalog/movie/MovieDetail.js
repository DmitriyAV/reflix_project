// MovieDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReflixNavbar from "../../ReflixNavbar";

function MovieDetail() {
    const { movieID } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {

        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/${movieID}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovieDetails(json))
            .catch(err => console.error('error:', err));

    }, [movieID]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ReflixNavbar />
            <h1>{movieDetails.title}</h1>
            <p>Year: {movieDetails.release_date}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
            <p>{movieDetails.overview}</p>
        </div>
    );
}

export default MovieDetail;
