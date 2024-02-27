"use client"
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import TagCard from "./tag-card";
import PriceContainer from "./price-container";
import { SearchItemType } from "@/types";


/**
 * Componenet renders deals card with prop.dealData
 */
const DealsWrapper = ({dealData}:{dealData:SearchItemType}) => {
  /**
   * handleClick is a function that runs when View More button is pressed.
   */
    const handleClick = () => {};
  return (
    <div className="bg-WHITE transition-all duration-500 w-[18rem] main-c-sm:w-[20rem] 
    main-c-lg:w-1/3 flex flex-col items-center p-4 border border-GREY2/10 rounded-xl">

      {/* Hero image of the deal */}
      <Image className=" m-16" width={150} height={150} alt="" src={dealData.image} />
      <div className="flex gap-4 my-3 w-full">
        {
          /**
           * rendering all tags through mapping dealData.tags
           */
          dealData.tags?.map((tag)=>(
            <TagCard key={tag} tag={tag} />
          ))
        }
      </div>

      <h4 className="font-bold text-GREY2 mb-3">{dealData.imageTag}</h4>

      {/* This h2 element renders name of the deal */}
      <h2 className="text-GREY2 w-full mb-3">
        {dealData.name}
      </h2>

      {/* Price Containers renders the Final price, Discount and original price */}
      <PriceContainer price={dealData.price!} discount={dealData.discount!}/>
      <Button onClick={handleClick} title="View more" />
    </div>
  );
};

export default DealsWrapper;
