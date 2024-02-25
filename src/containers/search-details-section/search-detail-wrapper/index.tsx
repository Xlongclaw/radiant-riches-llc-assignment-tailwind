import { SearchDetailProps } from "@/types";
import Image from "next/image";
import React from "react";

const SearchDetailWrapper = ({ data }: { data: SearchDetailProps }) => {
  return (
    <div className="flex gap-2 items-center text-GREYLIGHT1 text-sm hover:cursor-default">
      <Image height={20} width={20} src={data.icon} alt="" />
      <h3>{data.title}</h3>
      {data.value !== undefined && <h3>- {data.value}</h3>}
    </div>
  );
};

export default SearchDetailWrapper;
