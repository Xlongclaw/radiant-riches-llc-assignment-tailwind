import React from "react";

/**
 * Component renders the itemCard Skeleton until the data
 * is being loaded or searched.
 */
const Skeleton = () => {
  return (
    <div className="my-4">
      {
        /**
         * Rendering 6 Card Skeletons.
         */
        Array.from({length:6}).map((_,i)=>(
          <div key={`SKELETON_${i}`} className="w-full h-64 bg-ASCENT/10 animate-pulse rounded-2xl my-4"></div>
        ))
      }
    </div>
  );
};

export default Skeleton;
