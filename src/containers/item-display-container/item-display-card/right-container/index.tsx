import React from "react";
import RatingContainer from "./rating-container";
import Button from "@/components/button-blue";

const RightContainer: React.FC<{ rating: number; ratingTag: string }> = ({
  rating,
  ratingTag,
}) => {
  return (
    <div className="flex flex-col justify-between h-full w-full rating-md:w-[30rem] gap-4 rating-md:gap-16 items-center">
      <RatingContainer rating={rating} ratingTag={ratingTag} />
      <Button title={`View`} />
    </div>
  );
};

export default RightContainer;
