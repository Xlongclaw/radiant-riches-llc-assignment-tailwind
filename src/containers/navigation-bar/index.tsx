import SearchBar from "@/components/search-bar";
import React from "react";
import NavigationLinksContainer from "@/containers/navigation-links-container";


/**
 * Component that render the navigation bar 
 */
const NavigationBar: React.FC = () => {
  return (
    <div
      className="w-full h-16 bg-ASCENT flex justify-between items-center
     px-8 nav-lg:px-16 nav-xl:px-32 nav-xxl:px-xl  "
    >

      {/* Displaying the search bar */}
      <SearchBar />

      {/* Renders all the navigation link */}
      <NavigationLinksContainer />
    </div>
  );
};

export default NavigationBar;
