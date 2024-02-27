import { LinkListPropType } from "@/types";
import Link from "next/link";
import React from "react";

/**
 * LinkList renders the a list of links in the footer.
 * data - Object of Links.
 */
const LinkList = ({ data }: LinkListPropType) => {
  return (
    <div className="flex flex-col gap-4">

      {/* Displaying title of the list */}
      <h3 className="font-medium">{data.title}</h3>

      {/* Rendering all the links in the data */}
      {data.links.map((link) => (
        <Link key={link.link} className="font-light" href={link.link}>
          {" "}
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default LinkList;
