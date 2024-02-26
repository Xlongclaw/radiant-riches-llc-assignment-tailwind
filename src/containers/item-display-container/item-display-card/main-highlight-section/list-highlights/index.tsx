import React from "react";

const ListHighlights = () => {
  return (
    <div className="bg-LIGHTORANGE py-3 px-5 mt-4 rounded-xl">
      <div className="flex my-2 gap-3 items-center">
        <h3 className="bg-WHITE text-BLUE py-1 px-4 rounded-md">9.9</h3>
        <h3 className="text-sm font-medium text-GREY2/80">
          Building Responsive
        </h3>
      </div>
      <div className="flex my-2 gap-3 items-center">
        <h3 className="bg-WHITE text-BLUE py-1 px-4 rounded-md">9.9</h3>
        <h3 className="text-sm font-medium text-GREY2/80">Cool</h3>
      </div>
      <div className="flex my-2 gap-3 items-center">
        <h3 className="bg-WHITE text-BLUE py-1 px-4 rounded-md">9.9</h3>
        <h3 className="text-sm font-medium text-GREY2/80">Docs</h3>
      </div>
    </div>
  );
};

export default ListHighlights;
