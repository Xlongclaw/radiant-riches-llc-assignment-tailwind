import React from "react";

const PriceContainer = () => {
  return (
    <div className="flex w-full items-end gap-2 mb-3">
      <h3 className="text-xl text-ASCENT">$39.96</h3>
      <h3 className="text-sm text-GREY2 mb-[2px]">$49.96</h3>
      <h4 className="text-sm mb-[2px] text-RED">{`(20% off)`}</h4>
    </div>
  );
};

export default PriceContainer;
