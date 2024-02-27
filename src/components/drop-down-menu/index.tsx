"use client";
import { DropDownPropType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

/**
 * Component that renders a Drop Down List with data passed in prop.list
 * prop.list - an Object that contains all options data that are displayed in menu. 
 * prop.selectedIndex - a number that states the current active. 
 * prop.direction - 'TOP' OR 'BOTTOM' - Whether to show menu above the Button or Below it. 
 */
const DropDownMenu = ({list, selectedIndex, direction}: DropDownPropType) => {
  // expand - A state variable that decides whether to expand the Menu or not.
  const [expand, setExpand] = useState(false);
  return (
    <div className=" relative">
      <div onClick={() => setExpand(!expand)}
        className={`flex gap-4 items-center cursor-pointer ${expand && "bg-GREY2 text-WHITE"}
       hover:bg-GREY2/70 hover:text-WHITE py-2 px-4 rounded-lg`}>

        {/* title of currently selected option from the drop-down menu */}
        <h2 className="">{list[selectedIndex].title}</h2>

        {/* Cheveron Down Image */}
        <Image width={16} height={16} src={`/images/chevron-down-right.png`} alt="chevron-down"/>
      </div>

      {/* Render the drop down menu when expand state is true */}
      {expand && (
        <div
          className={`flex flex-col absolute ${direction === "BOTTOM" ? "top-12" : "bottom-12"} 
          z-10 border bg-GREYBG text-ASCENT rounded-xl [&>:not(:last-child)]:border-b `}>
          {list.map((item) => (
            <Link key={item.title} className="px-5 py-3 hover:bg-ASCENT/10" href={item.link}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
