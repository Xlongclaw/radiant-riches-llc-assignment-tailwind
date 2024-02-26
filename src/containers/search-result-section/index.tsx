import TextHeading from "@/components/text-heading";
import React from "react";
import SearchDetailsSection from "@/containers/search-details-section";
import OptionSection from "@/containers/option-section";
import RouteStrip from "@/components/route-strip";
import ItemDisplayContainer from "@/containers/item-display-container";
import DealsContainer from "@/containers/deals-container";

const SearchResultSection: React.FC = () => {
  const searchInput = "Best Website builders in the US.";
  return (
    <div className="px-xl">
      <TextHeading title={searchInput} />
      <SearchDetailsSection />
      <OptionSection />
      <RouteStrip />
      <ItemDisplayContainer />
      <DealsContainer />
    </div>
  );
};

export default SearchResultSection;
