import React from 'react';
import Search from '../search/Search';

function Navbar() {
    return (
        <div className="navbar">
            <div className="title">Searcher</div>

            <Search />
        </div>
    )
}

export default Navbar;