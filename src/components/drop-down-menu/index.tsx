"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DropDownMenu = ({
  list,
  selectedIndex,
  direction,
}: {
  list: Array<{ link: string; title: string }>;
  selectedIndex: number;
  direction?: "TOP" | "BOTTOM";
}) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className=" relative">
      <div
        className={`flex gap-4 items-center cursor-pointer ${
          expand && "bg-GREY2 text-WHITE"
        } hover:bg-GREY2/70 hover:text-WHITE py-2 px-4 rounded-lg`}
        onClick={() => setExpand(!expand)}
      >
        <h2 className="">{list[selectedIndex].title}</h2>
        <Image
          width={16}
          height={16}
          src={`/images/chevron-down-right.png`}
          alt="chevron-down"
          className=""
        />
      </div>
      {expand && (
        <div
          className={`flex flex-col absolute ${
            direction === "BOTTOM" ? "top-12" : "bottom-12"
          } z-10 border bg-GREYBG text-ASCENT rounded-xl 
          [&>:not(:last-child)]:border-b `}
        >
          {list.map((item) => (
            <Link className="px-5 py-3 hover:bg-ASCENT/10" href={item.link}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
