import TextHeading from "@/components/text-heading";
import React from "react";
import SearchDetailsSection from "../search-details-section";
import OptionSection from "../option-section";
import RouteStrip from "@/components/route-strip";

const SearchResultSection: React.FC = () => {
  const searchInput = "Best Website builders in the US.";
  return (
    <div className="px-xl">
      <TextHeading title={searchInput} />
      <SearchDetailsSection />
      <OptionSection />
      <RouteStrip />
    </div>
  );
};

export default SearchResultSection;
