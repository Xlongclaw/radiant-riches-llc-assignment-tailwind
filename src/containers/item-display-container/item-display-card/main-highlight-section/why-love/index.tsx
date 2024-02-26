import Image from "next/image";
import React from "react";

const WhyLove = ({ data }: { data: Array<string> }) => {
  return (
    <div className="">
      <h3 className="font-medium my-4">Why We Love It</h3>
      {data.map((tag, i) => (
        <div key={`WHY_LOVE_TAG_${i}`} className="flex gap-3 items-center mb-3">
          <Image
            width={16}
            height={16}
            src={`/images/check-blue.png`}
            alt="check"
          />
          <h3 className="text-sm text-GREY2/80 font-semibold">{tag}</h3>
        </div>
      ))}
    </div>
  );
};

export default WhyLove;
