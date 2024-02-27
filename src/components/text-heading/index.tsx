import { TextHeadingProps } from "@/types";
import React from "react";

/**
 * Component that generates Hero heading for Search title
 * with props.title .
 */
const TextHeading: React.FC<TextHeadingProps> = ({ title }) => {
  return (
    <h3 className="text-4xl main-c-md:text-5xl py-4 text-DARKBLUE1/30 font-bold tracking-[1px]">
      {title}
    </h3>
  );
};

export default TextHeading;
