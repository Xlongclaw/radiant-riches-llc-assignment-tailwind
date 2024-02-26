import React from "react";

const SequenceIndicator = ({ sequence }: { sequence: number }) => {
  return (
    <div
      className="absolute top-12 -left-5 border w-10 h-10 justify-center items-center flex font-semibold 
    rounded-full text-GREY2 bg-WHITE"
    >
      {sequence}
    </div>
  );
};

export default SequenceIndicator;
