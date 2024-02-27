"use client";
import React from "react";

/**
 * Component that renders Button with any title passed in props
 */
const Button = ({ title }: { title: string }) => {
  /**
   * handleClick is a function that runs when button is pressed.
   */
  const handleClick = () => {};
  
  return (
    <button onClick={handleClick}
      className="bg-BLUE text-WHITE w-full py-3 rounded-xl hover:bg-BLUE/90 transition-all">
      {title}
    </button>
  );
};

export default Button;
