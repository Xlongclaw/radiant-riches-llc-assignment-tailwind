"use client";
import React from "react";

/**
 * Component that renders Button with any title passed in props.
 * OnClick - function that handles button click.
 */
const Button = ({ title, onClick }: { title: string , onClick:()=>void}) => {
  
  return (
    <button onClick={onClick}
      className="bg-BLUE text-WHITE w-full py-3 rounded-xl hover:bg-BLUE/90 transition-all">
      {title}
    </button>
  );
};

export default Button;
