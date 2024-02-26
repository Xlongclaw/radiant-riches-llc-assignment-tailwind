import React from "react";

const BaseHighLights: React.FC<{ title: string; des: string }> = ({
  des,
  title,
}) => {
  return (
    <div className="">
      <h1 className="font-semibold text-GREY2/90">
        {title} : <span className=" text-GREY2/80 font-medium">{des}</span>
      </h1>
    </div>
  );
};

export default BaseHighLights;
