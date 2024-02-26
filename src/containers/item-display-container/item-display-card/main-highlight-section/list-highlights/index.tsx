import React from "react";

const ListHighlights = ({
  highlight,
}: {
  highlight: Array<{ rating: number; title: string }>;
}) => {
  return (
    <div className="bg-LIGHTORANGE py-3 px-5 mt-4 rounded-xl">
      {highlight.map((data, i) => (
        <div key={`HIGHLIGHT_${i}`} className="flex my-2 gap-3 items-center">
          <h3 className="bg-WHITE text-BLUE py-1 px-4 rounded-md">
            {data.rating}
          </h3>
          <h3 className="text-sm font-medium text-GREY2/80">{data.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ListHighlights;
