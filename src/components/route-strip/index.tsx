"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Component that renders a Route Strip with currentRoute value
 */
const RouteStrip = () => {
  // currentRoute - Value of the Current Route.
  const currentRoute = "/Home/HostingforAll/Hosting/Hosting6/Hosting5";

  // routes - Splitted Array of routes.
  const routes = currentRoute.split("/");
  return (
    <div className="text-sm font-medium text-GREYLIGHT1 flex gap-4 py-3 flex-wrap">
      {routes.map((route, i) => (
        <div key={route} className=" flex gap-4 items-center">

          {/* Link to migrate to previous routes */}
          <Link key={`ROUTE_${i}`} href={`#`}>
            {route}
          </Link>

          {/* Renders right chevron image after every link provided 
          it is not the first or the last Link */}
          {i !== 0 && i !== routes.length - 1 && (
            <Image
              width={12}
              height={12}
              src={`/images/chevron-down.png`}
              alt="chevron-right"
              className="-rotate-90"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default RouteStrip;
