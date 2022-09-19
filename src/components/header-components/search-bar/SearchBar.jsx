import React from "react";
import "./search-bar.scss"

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input 
                className="search-bar__input" 
                type="text" 
                placeholder="Any thing to search?"
            />
            <div className="search-bar__icon">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default SearchBar