import Image from "next/image";
import React from "react";

const TitleStrip = () => {
  return (
    <div className="flex justify-between items-center">
      <h3 className=" font-bold">Main Highlights</h3>
      <Image
        width={16}
        height={16}
        src={`/images/chevron-down.png`}
        alt="chevron"
      />
    </div>
  );
};

export default TitleStrip;
