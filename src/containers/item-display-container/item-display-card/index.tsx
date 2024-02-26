import React from "react";
import ImageContainer from "./image-container";
import TextContainer from "./text-container";
import RightContainer from "./right-container";
import MainHighLightSection from "./main-highlight-section";
import SequenceIndicator from "./sequence-indicator";

const ItemsDisplayCard: React.FC = () => {
  return (
    <div className="w-full bg-WHITE border border-GREYLIGHT1/10 p-3 rounded-2xl flex relative">
      <ImageContainer />
      <div className="pr-8">
        <TextContainer />
        <MainHighLightSection />
      </div>
      <RightContainer />
      <SequenceIndicator />
    </div>
  );
};

export default ItemsDisplayCard;
