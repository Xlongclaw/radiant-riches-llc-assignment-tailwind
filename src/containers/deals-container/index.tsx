import React from "react";
import DealsWrapper from "./deals-wrapper";
import SectionHeading from "@/components/section-heading";
import { RELATED_DEALS } from "@/constants";


/**
 * Component that renders container for display different deal Wrappers
 */
const DealsContainer:React.FC = () => {
  return (
    <div>
      <SectionHeading title="Related deals you might like for" />
      <div className="grid grid-flow-col main-c-lg:flex gap-4 overflow-x-scroll hide-scrollbar">
        {
          /**
           * Mapping Array of Deal Objects and sending these object through component props
           */
          RELATED_DEALS.map((deal)=>(
            <DealsWrapper dealData={deal} key={deal.name} />
          ))
        }
      </div>
    </div>
  );
};

export default DealsContainer;
