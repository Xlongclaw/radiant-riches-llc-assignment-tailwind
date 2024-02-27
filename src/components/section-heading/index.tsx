import React from "react";

/**
 * Component that generates heading for different section
 * with props.title .
 */
const SectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="text-2xl main-c-md:text-4xl mt-12 mb-8 text-ASCENT">
      {title}
    </div>
  );
};

export default SectionHeading;
