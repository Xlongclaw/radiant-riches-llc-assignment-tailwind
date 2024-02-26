import React from "react";

const Skeleton = () => {
  return (
    <div className="my-4 ">
      <div className="w-full h-64 bg-ASCENT/10 animate-pulse rounded-2xl my-4"></div>
      <div className="w-full h-64 bg-ASCENT/10 animate-pulse rounded-2xl my-4"></div>
      <div className="w-full h-64 bg-ASCENT/10 animate-pulse rounded-2xl my-4"></div>
      <div className="w-full h-64 bg-ASCENT/10 animate-pulse rounded-2xl my-4"></div>
      <div className="w-full h-64 bg-ASCENT/10 animate-pulse rounded-2xl my-4"></div>
      <div className="w-full h-64 bg-ASCENT/10 animate-pulse rounded-2xl my-4"></div>
    </div>
  );
};

export default Skeleton;
