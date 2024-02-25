import React from "react";
import SearchDetailWrapper from "./search-detail-wrapper";
import { SEARCH_DETAIL } from "@/constants";
import SortMenu from "./sort-menu";

const SearchDetailsSection: React.FC = () => {
  return (
    <div className="border-y py-4 border-ASCENT/10 flex justify-between">
      <div className=" flex gap-6">
        {SEARCH_DETAIL.map((data) => (
          <SearchDetailWrapper data={data} key={data.title} />
        ))}
      </div>
      <SortMenu />
    </div>
  );
};

export default SearchDetailsSection;
