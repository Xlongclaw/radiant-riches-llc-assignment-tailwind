"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchInput}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="h-9 w-64 bg-white rounded-lg flex items-center px-2 gap-2 "
    >
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
  );
};

export default SearchBar;
