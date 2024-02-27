import React from "react";
import RatingContainer from "./rating-container";
import Button from "@/components/Button";


/**
 * This Component Renders the right section of the Builder Item Card
 */
const RightContainer: React.FC<{ rating: number; ratingTag: string }> = ({
  rating,
  ratingTag,
}) => {
  /**
   * handleClick - function runs on pressing View Button
   */
  const handleClick = ()=>{}
  return (
    <div className="flex flex-col justify-between h-full w-full rating-md:w-[30rem] gap-4 rating-md:gap-16 items-center">

      {/* Rendering Rating Component to display rating of the builder */}
      <RatingContainer rating={rating} ratingTag={ratingTag} />
      <Button onClick={handleClick} title={`View`} />
    </div>
  );
};

export default RightContainer;
