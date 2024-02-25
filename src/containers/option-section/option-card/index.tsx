import Link from "next/link";
import React from "react";

const OptionCard = ({
  option,
}: {
  option: { title: string; link: string };
}) => {
  return (
    <Link
      href={option.link}
      className="text-sm bg-WHITE px-8 py-3 border border-GREYLIGHT1/10 rounded-lg transition-all duration-200 delay-75
       hover:bg-ASCENT hover:text-WHITE"
    >
      {option.title}
    </Link>
  );
};

export default OptionCard;
