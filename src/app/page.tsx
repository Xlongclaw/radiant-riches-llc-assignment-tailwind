import NavigationBar from "@/containers/navigation-bar";
import SearchResultSection from "@/containers/search-result-section";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="bg-GREYBG">
      <NavigationBar />
      <SearchResultSection />
    </div>
  );
};

export default page;
