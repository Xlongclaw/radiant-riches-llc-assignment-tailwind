"use client";
import { NAVIGATION_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FloatingLinks from "./floating-links";

const NavigationLinksContainer: React.FC = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className=" flex relative items-center gap-16 text-sm font-light text-GREY1 nav-lg:min-w-[50%] justify-end">
      {NAVIGATION_LINKS.map((linkObject) => (
        <Link
          className="hover:font-semibold transition-all duration-500 text-nowrap nav-lg:block hidden"
          key={linkObject.title}
          href={linkObject.link}
        >
          {linkObject.title}
        </Link>
      ))}
      <Image
        onClick={() => setExpand(!expand)}
        className="nav-lg:hidden block"
        width={16}
        height={16}
        src={`/images/menu-white.png`}
        alt=""
      />
      <FloatingLinks visible={expand} />
    </div>
  );
};

export default NavigationLinksContainer;
