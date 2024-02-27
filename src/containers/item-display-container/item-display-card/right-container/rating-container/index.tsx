"use client";
import Image from "next/image";
import React from "react";

const RatingContainer: React.FC<{ rating: number; ratingTag: string }> = ({
  rating,
  ratingTag,
}) => {
  return (
    <div
      className="bg-LIGHTBLUE flex flex-col items-center h-32 w-full rating-xl:w-4/5 rating-xxl:w-3/5 justify-center
     rounded-t-xl rounded-b-xl rating-md:rounded-b-xl rating-md:rounded-t-0 mt-3 rating-md:-mt-3"
    >
      <h3 className="text-3xl text-DARKBLUE2">{rating}</h3>
      <h3 className="text-BLUE text-sm mt-2">{ratingTag}</h3>
      <div className="flex">
        {Array.from({ length: rating / 2 }).map(() => (
          <Image
            width={12}
            height={12}
            src={`/images/full-star.png`}
            alt={`star`}
          />
        ))}
        {Array.from({ length: rating % 2 }).map(() => (
          <Image
            width={12}
            height={12}
            src={`/images/half-star.png`}
            alt={`star`}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingContainer;
