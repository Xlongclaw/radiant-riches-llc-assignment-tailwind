"use client";
import React from "react";
import ItemsDisplayCard from "./item-display-card";
import useSearchData from "@/hooks/useSearchData";
import Skeleton from "./skeleton";
import { SearchItemType } from "@/types";

const ItemDisplayContainer = ({ searchInput }: { searchInput: string }) => {
  // The container will display search Result Dependending on the value of search Data
  const searchData: Array<SearchItemType> | undefined | null = useSearchData(
    decodeURI(searchInput)
  );
  if (!searchData) return <Skeleton />;
  return (
    <div className="my-2">
      {searchData.map((data, i) => (
        <ItemsDisplayCard data={data} key={`WRAPPER_${i}`} />
      ))}
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
