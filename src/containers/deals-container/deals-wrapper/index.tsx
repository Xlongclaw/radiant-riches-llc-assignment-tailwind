import Button from "@/components/button-blue";
import Image from "next/image";
import React from "react";
import TagCard from "./tag-card";
import PriceContainer from "./price-container";

const DealsWrapper = () => {
  return (
    <div className="bg-WHITE transition-all duration-500 w-[18rem] main-c-sm:w-[20rem] main-c-lg:w-1/3 flex flex-col items-center p-4 border border-GREY2/10 rounded-xl">
      <Image
        className=" m-16"
        width={150}
        height={150}
        alt=""
        src={`/images/monitor.png`}
      />
      <div className="flex gap-4 my-3 w-full">
        <TagCard tag="20% off" />
        <TagCard tag="Limited Time" />
      </div>
      <h4 className="font-bold text-GREY2 mb-3">Web Builder</h4>
      <h2 className="text-GREY2 w-full mb-3">
        Computer Modern clasic with wix support
      </h2>
      <PriceContainer />
      <Button title="View more" />
    </div>
  );
};

export default DealsWrapper;
