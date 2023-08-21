import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import {Link} from "react-router-dom"; // Import debounce from lodash
function Search({rent}) {

        const [search, setSearch] = useState('');
        const [searchResult, setSearchResult] = useState([]);
        const apiKey = process.env.REACT_APP_API_KEY;

        const fetchSearchResults = async (query) => {
            const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
            };

            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setSearchResult(json.results);
            } catch (err) {
                console.error('error:', err);
            }
        };

        // Debounce the fetchSearchResults function
        const debouncedFetch = debounce(fetchSearchResults, 300); // Adjust the debounce delay as needed

        const handleChange = (event) => {
            const newSearch = event.target.value;
            setSearch(newSearch);
            debouncedFetch(newSearch); // Use debounced fetch function
        };

        useEffect(() => {
            return () => {
                // Cleanup function
                setSearch('');
                setSearchResult([]);
                debouncedFetch.cancel(); // Cancel any ongoing debounced fetch
            };
        }, []);

        return (
            <div>
                <input id="search-input" type="text" value={search} onChange={handleChange} />
                {searchResult.length > 0 && (
                    <div>
                        <h2>Results</h2>
                        {searchResult.map((searchItem) => (
                            <div key={searchItem.id} style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w500${searchItem.poster_path})`
                            }}>
                                <h3>{searchItem.title}</h3>
                                <button onClick={() => rent(searchItem)}>Rent</button>
                                <Link to={`/movies/${searchItem.id}`}>Details</Link>
                            </div>
                        ))}
                    </div>
                )}
                <ul>
                    {searchResult.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        );
    }

export default Search;