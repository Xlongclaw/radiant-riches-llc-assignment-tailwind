import React from "react";
import Footer from "@/containers/footer";
import NavigationBar from "@/containers/navigation-bar";
import SearchResultSection from "@/containers/search-result-section";

const page = ({ params }: { params: { searchText: string } }) => {
  return (
    <div>
      <NavigationBar />
      <SearchResultSection searchInput={params.searchText} />
      {/* <Footer /> */}
    </div>
  );
};

export default page;
