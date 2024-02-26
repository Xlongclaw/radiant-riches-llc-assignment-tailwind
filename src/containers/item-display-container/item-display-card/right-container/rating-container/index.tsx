"use client";
import Image from "next/image";
import React from "react";

const RatingContainer: React.FC = () => {
  return (
    <div className="bg-LIGHTBLUE flex flex-col items-center h-32 w-3/5 justify-center rounded-b-xl -mt-3">
      <h3 className="text-3xl text-DARKBLUE2">9.8</h3>
      <h3 className="text-BLUE text-sm">Exceptional</h3>
      <div className="flex">
        {Array.from({ length: 5 }).map(() => (
          <Image
            width={12}
            height={12}
            src={`/images/full-star.png`}
            alt={`star`}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingContainer;
