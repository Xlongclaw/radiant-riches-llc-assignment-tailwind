import React from "react";
import DealsWrapper from "./deals-wrapper";
import SectionHeading from "@/components/section-heading";

const DealsContainer = () => {
  return (
    <div className="">
      <SectionHeading title="Related deals you might like for" />
      <div className="flex gap-4">
        <DealsWrapper />
        <DealsWrapper />
        <DealsWrapper />
      </div>
    </div>
  );
};

export default DealsContainer;
