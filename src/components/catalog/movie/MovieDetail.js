import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
    const { movieID } = useParams();

    // Fetch movie details based on movieID

    return (
        <div>
            <h1>Movie Detail</h1>
            {/* Display movie details */}
        </div>
    );
}

export default MovieDetail;