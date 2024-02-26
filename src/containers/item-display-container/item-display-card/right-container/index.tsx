import React from "react";
import RatingContainer from "./rating-container";
import Button from "@/components/Button";

const RightContainer: React.FC = () => {
  return (
    <div className="flex flex-col justify-between w-[30rem] gap-4 items-center">
      <RatingContainer />
      <Button title={`View`} />
    </div>
  );
};

export default RightContainer;
