import { NAVIGATION_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavigationLinksContainer: React.FC = () => {
  return (
    <div className=" flex items-center gap-16 text-sm font-light text-GREY1 nav-lg:min-w-[50%] justify-end">
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
        className="nav-lg:hidden block"
        width={16}
        height={16}
        src={`/images/menu-white.png`}
        alt=""
      />
    </div>
  );
};

export default NavigationLinksContainer;
