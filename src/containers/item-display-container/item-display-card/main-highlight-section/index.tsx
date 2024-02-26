import React from "react";
import BaseHighLights from "./base-highlights";
import ListHighlights from "./list-highlights";
import WhyLove from "./why-love";
import Image from "next/image";
import TitleStrip from "./title-strip";
import ShowMoreBtn from "./show-more-btn";

const MainHighLightSection = () => {
  return (
    <div className="mt-4">
      <TitleStrip />
      <div className="ml-4 mt-2">
        <BaseHighLights />
        <ListHighlights />
        <WhyLove />
        <ShowMoreBtn />
      </div>
    </div>
  );
};

export default MainHighLightSection;
