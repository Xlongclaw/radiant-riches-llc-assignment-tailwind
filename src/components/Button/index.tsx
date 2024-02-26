"use client";
import React from "react";

const Button = ({ title }: { title: string }) => {
  const handleClick = () => {};
  return (
    <button
      onClick={() => handleClick()}
      className="bg-BLUE text-WHITE w-full py-3 rounded-xl hover:bg-BLUE/90 transition-all"
    >
      {title}
    </button>
  );
};

export default Button;
