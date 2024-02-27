"use client";
import React from "react";
import SearchDetailWrapper from "./search-detail-wrapper";
import { SEARCH_DETAIL } from "@/constants";
import SortMenu from "./sort-menu";
import DropDownMenu from "@/components/drop-down-menu";
import SEARCH_DETAILS_DROPDOWN from "@/constants/SEARCH_DETAILS_DROPDOWN";
import { SearchItemType } from "@/types";
import useSearchData from "@/hooks/useSearchData";

const SearchDetailsSection: React.FC<{ searchInput: string }> = ({
  searchInput,
}) => {
  const searchData: Array<SearchItemType> | undefined | null = useSearchData(
    decodeURI(searchInput)
  );
  if (searchData?.length)
    return (
      <div className="border-y py-4 border-ASCENT/10 hidden main-c-md:flex justify-between ">
        <div className=" flex gap-6">
          {SEARCH_DETAIL.map((data) => (
            <SearchDetailWrapper data={data} key={data.title} />
          ))}
        </div>
        <DropDownMenu
          direction="BOTTOM"
          list={SEARCH_DETAILS_DROPDOWN}
          selectedIndex={0}
        />
        {/* <SortMenu /> */}
      </div>
    );
  return <></>;
};

export default SearchDetailsSection;
