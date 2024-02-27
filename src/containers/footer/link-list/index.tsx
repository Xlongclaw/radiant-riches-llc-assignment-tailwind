import Link from "next/link";
import React from "react";

const LinkList = ({
  data,
}: {
  data: {
    title: string;
    links: Array<{
      title: string;
      link: string;
    }>;
  };
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-medium">{data.title}</h3>
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
