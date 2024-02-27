import React from "react";

/**
 * Component that renders the sequence number of the BuilderItem
 * props.sequence - a number represneting the sequence of displayed item.
 */
const SequenceIndicator = ({ sequence }: { sequence: number }) => {
  return (
    <div
      className="absolute top-16 -left-5 border w-10 h-10 justify-center items-center flex font-semibold 
    rounded-full text-GREY2 bg-WHITE"
    >
      {sequence}
    </div>
  );
};

export default SequenceIndicator;
