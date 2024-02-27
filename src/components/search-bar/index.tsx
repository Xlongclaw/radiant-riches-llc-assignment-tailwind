"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchInput}`);
  };

  return (
    <div className="flex items-center relative ">
      <Image
        onClick={() => setExpanded(!expanded)}
        width={26}
        height={26}
        src={`${expanded ? "/images/search.png" : "/images/search-white.png"}`}
        alt="search icon"
        className={`nav-md:hidden flex rounded-full ${
          expanded ? "bg-GREYBG p-2" : "bg-transparent p-1"
        } `}
      />

      <form
        onSubmit={handleSubmit}
        className="nav-md:h-9 h-12 w-64 hidden nav-md:static top-12 left-0 bg-ASCENT/10 nav-md:bg-white rounded-lg nav-md:flex items-center px-2 gap-2 "
      >
        <Image
          width={16}
          height={16}
          src={`/images/search.png`}
          alt="search icon"
        />
        <input
          className="border-none focus:outline-none text-sm bg-transparent"
          type="text"
          name="search"
          id="search"
          value={searchInput}
          onChange={handleChange}
          placeholder="Search Something..."
        />
        <button type="submit">
          <Image
            width={20}
            height={20}
            src={`/images/chevron-down.png`}
            alt="search icon"
            className="-rotate-90 hover:bg-ASCENT/30 p-1 rounded-full"
          />
        </button>
      </form>
      {expanded && (
        <form
          onSubmit={handleSubmit}
          className="nav-md:h-9 h-12 w-64 absolute nav-md:static top-12 left-0 bg-ASCENT/10 nav-md:bg-white rounded-lg flex items-center px-4 gap-2 "
        >
          <input
            className="border-none focus:outline-none text-sm bg-transparent"
            type="text"
            name="search"
            id="search"
            value={searchInput}
            onChange={handleChange}
            placeholder="Search Something..."
          />
          <button type="submit">
            <Image
              width={20}
              height={20}
              src={`/images/chevron-down.png`}
              alt="search icon"
              className="-rotate-90 hover:bg-ASCENT/30 p-1 rounded-full"
            />
          </button>
        </form>
      )}
    </div>
  );
};

export default SearchBar;
