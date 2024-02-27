import React from "react";
import ImageContainer from "./image-container";
import TextContainer from "./text-container";
import RightContainer from "./right-container";
import MainHighLightSection from "./main-highlight-section";
import SequenceIndicator from "./sequence-indicator";
import { SearchItemType } from "@/types";
import Tag from "./tag";


/**
 * Component that renders all the data of the BuilderItem.
 * props.data - object containing of data of a particular builderItem.
 */
const ItemsDisplayCard = ({ data }: { data: SearchItemType }) => {
  return (
    <div
      className="w-full bg-WHITE border border-GREYLIGHT1/10 p-3 rounded-2xl flex relative my-3 flex-col
     main-c-md:flex-row items-center main-c-md:items-start"
    >

      {/* Rendering the Image of the Builder and the Builder and its Tag */}
      <ImageContainer image={data.image} imageTag={data.imageTag!} />
      <div className="pr-8">

        {/* Displaying the Text Details -> name and description of the builderItem */}
        <TextContainer title={data.name} description={data.description!} />
        
        {/* Displaying all the highlight of the BuilderItem */}
        <MainHighLightSection
          data={{
            mainHighlight: data.mainHighlight,
            mainHighlightList: data.mainHighlightList,
            whylove: data.whylove,
          }}
        />
      </div>
      <RightContainer rating={data.rating!} ratingTag={data.tags![0]} />

      {/* Sequence of that particular builder item is displayed */}
      <SequenceIndicator sequence={data.sequence!} />

      {/* Rendering tag if there is any on the builderItem */}
      {data.bestChoice && <Tag type="Best Choice" />}
      {data.bestValue && <Tag type="Best Value" />}
    </div>
  );
};

export default ItemsDisplayCard;
