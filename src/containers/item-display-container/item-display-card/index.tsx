import React from "react";
import ImageContainer from "./image-container";
import TextContainer from "./text-container";
import RightContainer from "./right-container";
import MainHighLightSection from "./main-highlight-section";
import SequenceIndicator from "./sequence-indicator";
import { SearchItemType } from "@/types";

const ItemsDisplayCard = ({ data }: { data: SearchItemType }) => {
  return (
    <div className="w-full bg-WHITE border border-GREYLIGHT1/10 p-3 rounded-2xl flex relative my-3">
      <ImageContainer image={data.image} imageTag={data.imageTag!} />
      <div className="pr-8">
        <TextContainer title={data.name} description={data.description!} />
        <MainHighLightSection
          data={{
            mainHighlight: data.mainHighlight,
            mainHighlightList: data.mainHighlightList,
            whylove: data.whylove,
          }}
        />
      </div>
      <RightContainer rating={data.rating!} ratingTag={data.tags![0]} />
      <SequenceIndicator sequence={data.sequence!} />
    </div>
  );
};

export default ItemsDisplayCard;
