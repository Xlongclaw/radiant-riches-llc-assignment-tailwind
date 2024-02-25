"use client";
import Image from "next/image";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  return (
    <div className="h-9 w-64 bg-white rounded-lg flex items-center px-2 gap-2 hover: border hover:border-[#656565]">
      <Image
        width={16}
        height={16}
        src={`/images/search.png`}
        alt="search icon"
      />
      <input
        className="border-none focus:outline-none text-sm"
        type="text"
        name="search"
        id="search"
        value={searchInput}
        onChange={handleChange}
        placeholder="Search Something..."
      />
    </div>
  );
};

export default SearchBar;
