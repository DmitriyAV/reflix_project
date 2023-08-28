import React, {useEffect, useState} from 'react';
import ReflixNavbar from "../ReflixNavbar";
import {Link} from "react-router-dom";
import BasicModal from "./BasicModal";


function Catalog() {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(null)
    const [movies, setMovies] = useState([]);
    const [rentedMovies, setRentedMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}`
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovies(json.results))
            .catch(err => console.error('error:' + err));

        return () => {
            setIsLoading(true)
        }
    }, []);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const rentMovie = (movie) => {
        if (!rentedMovies.includes(movie)) {
            setRentedMovies([...rentedMovies, movie]);
            handleOpen()
        }
    };


    const unrentMovie = (movie) => {
        const updatedRentedMovies = rentedMovies.filter((m) => m.id !== movie.id);
        setRentedMovies(updatedRentedMovies);
    };

    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ReflixNavbar rent={rentMovie}/>
            <div className={"container"}>
                {movies.map((movie) => (
                    <div key={movie.id} style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
                    }}>
                        <h3>{movie.title}</h3>
                        <button onClick={() => rentMovie(movie)}>Rent</button>
                        <Link to={`/movies/${movie.id}`}>Details</Link>
                        <BasicModal show={open} close={() => handleClose} title={movie.title}/>
                    </div>
                ))}

                {rentedMovies.length > 0 && (
                    <div>
                        <h2>Rented</h2>
                        {rentedMovies.map((rentedMovie) => (
                            <div key={rentedMovie.id} style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w500${rentedMovie.poster_path})`
                            }}>
                                <h3>{rentedMovie.title}</h3>
                                <button onClick={() => unrentMovie(rentedMovie)}>Unrent</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>

    );
}

export default Catalog;
