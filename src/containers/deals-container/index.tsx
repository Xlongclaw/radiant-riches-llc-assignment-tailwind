import React from "react";
import DealsWrapper from "./deals-wrapper";
import SectionHeading from "@/components/section-heading";

const DealsContainer = () => {
  return (
    <div className="">
      <SectionHeading title="Related deals you might like for" />
      <div className="grid grid-flow-col main-c-lg:flex gap-4 overflow-x-scroll">
        <DealsWrapper />
        <DealsWrapper />
        <DealsWrapper />
      </div>
    </div>
  );
};

export default DealsContainer;
