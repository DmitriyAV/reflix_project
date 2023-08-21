import React from 'react';
import {Link} from "react-router-dom";
import Search from "./search/Search";

function ReflixNavbar({rent}) {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="navbar-link">Home</div>
            </Link>
            <Link to="/catalog">
                <div className="navbar-link">Catalog</div>
            </Link>
            <Search rent={rent}/>
        </div>
    );
}

export default ReflixNavbar;