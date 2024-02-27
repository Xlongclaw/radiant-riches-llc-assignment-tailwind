"use client";
import React from "react";
import ItemsDisplayCard from "./item-display-card";
import useSearchData from "@/hooks/useSearchData";
import Skeleton from "./skeleton";
import { SearchItemType } from "@/types";

/**
   * ItemDisplayContainer - a container component for retrieving 
   * search Result Dependending on the value of search Data.
   * 
   * searchInput - a string that contains the user serch input
   */
const ItemDisplayContainer = ({ searchInput }: { searchInput: string }) => {
  
  /**
   * Subscribing to Search Data using useSearchData hook.
   */
  const searchData: Array<SearchItemType> | undefined | null = useSearchData(
    decodeURI(searchInput)
  );

  /**
   * If data is not loaded returning skeleton.
   */
  if (!searchData) return <Skeleton />;

  /**
   * After Loading Returning the component.
   */
  return (
    <div className="my-2">

      {/* Piping the search data to ItemDisplayCard */}
      {searchData.map((data, i) => (
        <ItemsDisplayCard data={data} key={`WRAPPER_${i}`} />
      ))}

      {/* If searchData is empty rendering NO match Found */}
      {!searchData.length && (
        <div className="bg-GREY2/10 border flex flex-col justify-center items-center py-32  font-bold text-GREY2 rounded-2xl">
          <h3 className="text-lg">NO SEARCH MATCH FOUND</h3>
          <h3 className="text-sm">Try searching something else</h3>
        </div>
      )}
    </div>
  );
};

export default ItemDisplayContainer;
