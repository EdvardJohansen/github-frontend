import React from 'react'
import '../css/SearchBar.css'
import SearchIcon from '../images/search.svg'

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            <img className="search-icon" src={SearchIcon} alt="Search icon"/>
            <input className="search-input" type="text" placeholder="Search GitHub username"></input>
            <button className="btn-search">Search</button>
        </div>
    )
}

export default SearchBar
