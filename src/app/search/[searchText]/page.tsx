import React from "react";
import Footer from "@/containers/footer";
import NavigationBar from "@/containers/navigation-bar";
import SearchResultSection from "@/containers/search-result-section";

/**
 * Component that is rendered at the /search/*.
 * This component displays the search Page.
 * params.searchString - value of Dynamic Route that renders the search result.
 */
const page = ({ params }: { params: { searchText: string } }) => {
  return (
    <div>
      <NavigationBar />
      {/* Passing current Dynamic Route value to SearchResultSection Component 
      so that it can display search result as per the value*/}
      <SearchResultSection searchInput={params.searchText} />
      <Footer />
    </div>
  );
};

export default page;
