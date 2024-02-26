import Image from "next/image";
import React from "react";

const ImageContainer: React.FC<{ image: any; imageTag: string }> = ({
  image,
  imageTag,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 m-16">
      <Image width={250} height={250} src={image} alt="item-image" />
      <h3 className="text-GREYLIGHT1 text-sm">{imageTag}</h3>
    </div>
  );
};

export default ImageContainer;
