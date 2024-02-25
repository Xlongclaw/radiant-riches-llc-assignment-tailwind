import { NAVIGATION_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

const NavigationLinksContainer: React.FC = () => {
  return (
    <div className=" flex gap-16 text-sm font-light text-GREY1 min-w-[50%] justify-end">
      {NAVIGATION_LINKS.map((linkObject) => (
        <Link
          className="hover:font-semibold transition-all duration-500 text-nowrap"
          key={linkObject.title}
          href={linkObject.link}
        >
          {linkObject.title}
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinksContainer;
