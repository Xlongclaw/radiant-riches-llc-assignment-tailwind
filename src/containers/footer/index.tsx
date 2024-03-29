import React from "react";
import LinkList from "./link-list";
import FOOTER_LINKS from "@/constants/FOOTER_LINKS";
import DropDownMenu from "@/components/drop-down-menu";
import { FOOTER_DROPDOWN_LINKS } from "@/constants";

/**
 * This component render the Footer of the WebPage
 */
const Footer:React.FC = () => {
  return (
    <div className="bg-ASCENT p-32 text-GREYBG flex flex-col items-center main-c-lg:flex-row justify-center gap-32 text-nowrap">

      {/* div containing all footer link lists */}
      <div className="flex flex-col  main-c-md:flex-row gap-16 main-c-md:gap-48">
        {FOOTER_LINKS.map((linkObject, i) => (
          /**
           * Rendering all the Lists by passing objects of the FOOTER_LINKS
           * to the LinkList Component
           */
          <LinkList key={`FOOTER_LINK_LIST_${i}`} data={linkObject} />
        ))}
      </div>

      {/* Rendering Country Drop Down Menu */}
      <DropDownMenu list={FOOTER_DROPDOWN_LINKS} selectedIndex={0} />
    </div>
  );
};

export default Footer;
