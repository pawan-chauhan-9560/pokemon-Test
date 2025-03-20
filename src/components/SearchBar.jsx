import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/pokemon/${search.toLowerCase()}`);
      setSearch("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokémon by Name or ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSubmit}>🔍 Search</button>
    </div>
  );
};

export default SearchBar;
