import React from "react";

const TextContainer: React.FC<{ title: string; description: string }> = ({
  description,
  title,
}) => {
  return (
    <div>
      <h3 className="font-semibold text-GREY2">
        {title} -<span className="font-normal">{description}</span>
      </h3>
    </div>
  );
};

export default TextContainer;
