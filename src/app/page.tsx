import Link from "next/link";
import React from "react";

/**
 * Component that is rendered at the Base URL of Website.
 * This component provides a link to the user to migrate to a /serach/*
 * /search/* is the only working route.
 */
const page: React.FC = () => {
  return (
    <div className="bg-GREYBG flex flex-col justify-center items-center h-screen">

      {/* Displaying message that the route does not exist */}
      <h2>Welcome to Home</h2>
      <h3>{"(Only /search/* Route is created for the website)"}</h3>

      {/* Link to /search/* */}
      <h3>
        {"try going to"}{" "}
        <Link
          href={`/search/Best%20Website%20Builder%20in%20the%20US`}
          className="text-BLUE cursor-pointer hover:underline">
          /search/Best%20Website%20Builder%20in%20the%20US
        </Link>
      </h3>
    </div>
  );
};

export default page;
