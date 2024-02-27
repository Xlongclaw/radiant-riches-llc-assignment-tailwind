"use client";
import { SearchItemType } from "@/types";
import { useEffect, useState } from "react";

/**
 * useSearchData - hook that fetches search Results by sending 
 * POST request to /api/search using fetch api.
 * searchText - a string that contains user search input.
 */
const useSearchData = (searchText: string) => {

  /**
   * searchData - state variable to store search Result Data.
   */
  const [searchData, setSeachData] = useState<
    Array<SearchItemType> | null | undefined
  >(null);

  useEffect(() => {

    /**
     * Sending POST Request to /api/search to fetch search result.
     */
    fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchInput: searchText }),
    })
      .then((response) => response.json())
      .then((data) => {

        /**
         * Pushing the search Results to searchData.
         */
        setSeachData(data);
      });
  }, []);
  return searchData;
};

export default useSearchData;
