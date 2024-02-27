import Image from "next/image";
import React from "react";

/**
 * Component renders tag for the given BuilderItem
 */
const Tag = ({ type }: { type: "Best Value" | "Best Choice" }) => {
  return (
    <div className="absolute top-4 left-0 bg-orange-500 flex gap-2 py-2 px-4 rounded-r-lg">

      {/* Tag image */}
      <Image
        width={24}
        height={24}
        src={`${
          type == "Best Choice"
            ? "/images/trophy-white.png"
            : "/images/diamond-white.png"
        }`}
        alt="trophy"
      />

      {/* Tag Title */}
      <h4 className="text-WHITE">{type}</h4>
    </div>
  );
};

export default Tag;
