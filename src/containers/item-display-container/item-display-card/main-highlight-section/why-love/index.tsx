import Image from "next/image";
import React from "react";

const WhyLove = () => {
  return (
    <div className="">
      <h3 className="font-medium my-4">Why We Love It</h3>

      <div className="flex gap-3 items-center mb-3">
        <Image
          width={16}
          height={16}
          src={`/images/check-blue.png`}
          alt="check"
        />
        <h3 className="text-sm text-GREY2/80 font-semibold">Documentation</h3>
      </div>
      <div className="flex gap-3 items-center mb-3">
        <Image
          width={16}
          height={16}
          src={`/images/check-blue.png`}
          alt="check"
        />
        <h3 className="text-sm text-GREY2/80 font-semibold">Eazy Use</h3>
      </div>
      <div className="flex gap-3 items-center mb-3">
        <Image
          width={16}
          height={16}
          src={`/images/check-blue.png`}
          alt="check"
        />
        <h3 className="text-sm text-GREY2/80 font-semibold">Out of the Box</h3>
      </div>
    </div>
  );
};

export default WhyLove;
