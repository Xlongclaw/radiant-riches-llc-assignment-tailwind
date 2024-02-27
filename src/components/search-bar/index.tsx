"use client";
import React, { useState } from "react";
import SearchIconSmall from "./search-icon-small";
import SearchCard from "./search-card";

/**
 * Component that renders Search Bar 
 */
const SearchBar: React.FC = () => {

  // searchInput - holds string that user enter in searchBox
  const [searchInput, setSearchInput] = useState("");

  // expanded - state variable used to display the searchBar when
  const [expanded, setExpanded] = useState(false);

  const changeSearchInput = (input:string)=>{
    setSearchInput(input)
  }

  return (
    <div className="flex items-center relative ">

      {/* Search Icon in mobile Screens 
      expand the search bar when pressed */}
      <button onClick={() => setExpanded(!expanded)}>
        <SearchIconSmall expanded={expanded}/>
      </button>

      {expanded ?(
        <SearchCard changeSearchInput={changeSearchInput} searchInput={searchInput} screen="small"/>
        ): (
        <SearchCard searchInput={searchInput} changeSearchInput={changeSearchInput} screen="large"/>
      )}

    </div>
  );
};

export default SearchBar;
