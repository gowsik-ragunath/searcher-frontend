import React from 'react';
import SearchForm from '../search/SearchForm';

function Navbar() {
    return (
        <div className="navbar">
            <div className="title">Searcher</div>

            <SearchForm />
        </div>
    )
}

export default Navbar;