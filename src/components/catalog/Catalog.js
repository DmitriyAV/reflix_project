import React, {useEffect, useState} from 'react';
import ReflixNavbar from "../ReflixNavbar";



function Catalog() {

    const [isLoading, setIsLoading] = useState(null)
    const [movies, setMovies] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {

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
            alert("loading id done")
        }
    }, []);

    return (
        <div>
            <ReflixNavbar/>
            <div className={"container"}>
                {movies.map(card => (
                    <div key={card.id} className={"poster-container"} style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${card.poster_path})`
                    }}>
                        <h3>{card.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
