import Logo from "@/components/logo";
import SearchBar from "@/components/search-bar";
import React from "react";
import NavigationLinksContainer from "../navigation-links-container";

const NavigationBar: React.FC = () => {
  return (
    <div className="w-full h-16 bg-ASCENT flex justify-between items-center px-xl">
      <Logo />
      <SearchBar />
      <NavigationLinksContainer />
    </div>
  );
};

export default NavigationBar;
