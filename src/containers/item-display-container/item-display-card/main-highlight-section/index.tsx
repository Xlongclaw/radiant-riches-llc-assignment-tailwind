import React from "react";
import BaseHighLights from "./base-highlights";
import ListHighlights from "./list-highlights";
import WhyLove from "./why-love";
import TitleStrip from "./title-strip";
import ShowMoreBtn from "./show-more-btn";
import { MainHighLightPropsType } from "@/types";

const MainHighLightSection = ({ data }: { data: MainHighLightPropsType }) => {
  return (
    <div className="mt-4">
      <TitleStrip />
      <div className="ml-4 mt-2">
        {data.mainHighlight &&
          data.mainHighlight.map((highlight) => (
            <BaseHighLights
              title={highlight.title}
              des={highlight.description}
            />
          ))}

        {data.mainHighlightList && (
          <ListHighlights highlight={data.mainHighlightList} />
        )}

        {data.whylove && <WhyLove data={data.whylove} />}
        <ShowMoreBtn />
      </div>
    </div>
  );
};

export default MainHighLightSection;
