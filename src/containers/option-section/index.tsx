import React from "react";
import OptionCard from "./option-card";
import { OPTIONS } from "@/constants";

const OptionSection: React.FC = () => {
  return (
    <div className="flex gap-4 py-2">
      {OPTIONS.map((option) => (
        <OptionCard key={option.title} option={option} />
      ))}
    </div>
  );
};

export default OptionSection;
