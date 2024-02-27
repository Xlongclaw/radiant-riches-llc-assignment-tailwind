import { NAVIGATION_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

const FloatingLinks = ({ visible }: { visible: boolean }) => {
  return (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } flex-col absolute bg-GREY1 top-12 border border-GREY2/20
       text-ASCENT text-sm font-semibold w-[10rem] rounded-lg [&>*:not(:last-child)]:border-b`}
    >
      {NAVIGATION_LINKS.map((linkObject, i) => (
        <Link className="py-3 px-3 hover:bg-ASCENT/10" href={linkObject.link}>
          {linkObject.title}
        </Link>
      ))}
    </div>
  );
};

export default FloatingLinks;
