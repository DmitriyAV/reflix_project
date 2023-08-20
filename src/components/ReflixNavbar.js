import React from 'react';
import {Link} from "react-router-dom";

function ReflixNavbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="navbar-link">Home</div>
            </Link>
            <Link to="/catalog">
                <div className="navbar-link"> Catalog </div>
            </Link>
        </div>
    );
}

export default ReflixNavbar;