import TextHeading from "@/components/text-heading";
import React from "react";
import SearchDetailsSection from "@/containers/search-details-section";
import OptionSection from "@/containers/option-section";
import RouteStrip from "@/components/route-strip";
import ItemDisplayContainer from "@/containers/item-display-container";
import DealsContainer from "@/containers/deals-container";
import SignupSection from "@/containers/signup-section";

const SearchResultSection = ({ searchInput }: { searchInput: string }) => {
  return (
    <div className="px-xl">
      <TextHeading title={decodeURI(searchInput)} />
      <SearchDetailsSection />
      <OptionSection />
      <RouteStrip />
      <ItemDisplayContainer searchInput={searchInput} />
      <DealsContainer />
      <SignupSection />
    </div>
  );
};

export default SearchResultSection;
