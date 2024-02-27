import React from "react";

/**
 * Component that renders the Price Container
 */
const PriceContainer = ({price,discount}:{price:number,discount:number}) => {

  /**
   * calculateFinalPrice - function returns the final price of the deal 
   * on passing the original price to it.
   */
  const calculateFinalPrice = (price: number) => {
    return price - (price * discount) / 100;
  };

  return (
    <div className="flex w-full items-end gap-2 mb-3">

      {/* Displays Final Price of the deal */}
      <h3 className="text-xl text-ASCENT">${calculateFinalPrice(price)}</h3>

      {/* Displays Original Price of the deal*/}
      <h3 className="text-sm text-GREY2/50 mb-[2px] line-through">${price}</h3>

      {/* Displays Discount of the deal */}
      <h4 className="text-sm mb-[2px] text-RED">{`(${discount}%off)`}</h4>
    </div>
  );
};

export default PriceContainer;
