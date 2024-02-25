"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RouteStrip = () => {
  // Store Current Route in currentRoute and the strip will work fine
  const currentRoute = "/Home/HostingforAll/Hosting/Hosting6/Hosting5";
  const routes = currentRoute.split("/");
  let routeLink = "/";

  // const getRouteLink = (i: number) => {
  //   Array.from({ length: i }).map(() => {
  //     routeLink += routes[i] + "/";
  //   });
  //   console.log(routeLink);

  //   return routeLink;
  // };
  return (
    <div className="text-sm font-medium text-GREYLIGHT1 flex gap-4 py-3">
      {routes.map((route, i) => (
        <div className=" flex gap-4 items-center">
          <Link key={`ROUTE_${i}`} href={`#`}>
            {route}
          </Link>
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
