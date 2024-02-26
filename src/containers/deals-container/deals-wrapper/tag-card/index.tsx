import React from "react";

const TagCard = ({ tag }: { tag: string }) => {
  return (
    <div className="bg-LIGHTBLUE text-BLUE py-1 px-6 rounded-lg text-sm font-medium flex-wrap">
      {tag}
    </div>
  );
};

export default TagCard;
