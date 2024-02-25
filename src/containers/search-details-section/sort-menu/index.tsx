import Image from "next/image";
import React from "react";

const SortMenu = () => {
  return (
    <div className="">
      <div className="flex gap-2 items-center">
        <h2 className="text-GREYLIGHT1">Top Relevent</h2>
        <Image
          width={16}
          height={16}
          src={`/images/chevron-down.png`}
          alt="chevron-down"
        />
      </div>
    </div>
  );
};

export default SortMenu;
