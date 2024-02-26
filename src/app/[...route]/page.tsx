import Link from "next/link";
import React from "react";

const page = ({ params }: { params: { route: string } }) => {
  return (
    <div className="bg-GREYBG flex flex-col justify-center items-center h-screen">
      <h2>/{params.route} route was not yet created</h2>
      <h3>{"(Only /search/* Route is created for the website)"}</h3>
      <h3>
        {"try going to"}{" "}
        <Link
          href={`/search/Best%20Website%20Builder%20in%20the%20US`}
          className="text-BLUE cursor-pointer hover:underline"
        >
          /search/Best%20Website%20Builder%20in%20the%20US
        </Link>
      </h3>
    </div>
  );
};

export default page;
