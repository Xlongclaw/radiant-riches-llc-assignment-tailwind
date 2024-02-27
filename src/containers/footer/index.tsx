import React from "react";
import LinkList from "./link-list";
import FOOTER_LINKS from "@/constants/FOOTER_LINKS";
import DropDownMenu from "@/components/drop-down-menu";
import { FOOTER_DROPDOWN_LINKS } from "@/constants";

const Footer = () => {
  return (
    <div className="bg-ASCENT p-32 text-GREYBG flex flex-col items-center main-c-lg:flex-row justify-center gap-32 text-nowrap">
      <div className="flex flex-col items-center main-c-md:flex-row gap-32">
        {FOOTER_LINKS.map((linkObject, i) => (
          <LinkList key={`FOOTER_LINK_LIST_${i}`} data={linkObject} />
        ))}
      </div>
      <DropDownMenu list={FOOTER_DROPDOWN_LINKS} selectedIndex={0} />
    </div>
  );
};

export default Footer;
