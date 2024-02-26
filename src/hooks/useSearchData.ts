"use client";
import { SearchItemType } from "@/types";
import { useEffect, useState } from "react";

const useSearchData = (searchText: string) => {
  const [searchData, setSeachData] = useState<
    Array<SearchItemType> | null | undefined
  >(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchInput: searchText }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSeachData(data);
      });
  }, []);
  return searchData;
};

export default useSearchData;
