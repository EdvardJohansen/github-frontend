import React, { useState } from "react";
import "../css/SearchBar.css";
import SearchIcon from "../images/search.svg";

const SearchBar = ({ getUserData }) => {
  const [username, setUsername] = useState(null);

  return (
    <div className="search-bar-container">
      <img className="search-icon" src={SearchIcon} alt="Search icon" />
      <input
        onChange={(e) => setUsername(e.target.value)}
        className="search-input"
        type="text"
        placeholder="Search GitHub username"
      ></input>
      <button onClick={() => getUserData(username)} className="btn-search">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
