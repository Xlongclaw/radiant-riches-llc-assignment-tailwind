"use client";
import Image from "next/image";
import React from "react";

const ShowMoreBtn = () => {
  const handleClick = () => {};

  return (
    <button
      className="text-BLUE font-medium flex items-center gap-2 mt-4 hover:underline cursor-pointer"
      onClick={() => handleClick()}
    >
      Show more
      <Image
        width={16}
        height={16}
        src={`/images/chevron-down-blue.png`}
        alt=""
      />
    </button>
  );
};

export default ShowMoreBtn;
