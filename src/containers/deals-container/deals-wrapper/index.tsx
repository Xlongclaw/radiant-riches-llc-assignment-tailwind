import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import TagCard from "./tag-card";

const DealsWrapper = () => {
  return (
    <div className="bg-WHITE w-1/3">
      <Image width={150} height={150} alt="" src={`/images/monitor.png`} />
      <TagCard />
      <Button title="View more" />
    </div>
  );
};

export default DealsWrapper;
