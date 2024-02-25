import { TextHeadingProps } from "@/types";
import React from "react";

const TextHeading: React.FC<TextHeadingProps> = ({ title }) => {
  return (
    <h3 className="text-5xl py-4 text-DARKBLUE1/30 font-bold tracking-[1px]">
      {title}
    </h3>
  );
};

export default TextHeading;
