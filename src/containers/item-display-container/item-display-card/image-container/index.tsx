import Image from "next/image";
import React from "react";

/**
 * ImageContainer - Component that renders the Image of Web Builder Object.
 * prop.image - public url to image fetched through route handler at /api/search and then passed through props.
 * prop.imageTag - Code of the Builder that is displayed.
 */
const ImageContainer: React.FC<{ image: any; imageTag: string }> = ({
  image,
  imageTag,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 m-16">

      {/* Rendering Image of the Builder */}
      <Image width={250} height={250} src={image} alt="item-image" />

      {/* Rendering the imageTag of the Builder */}
      <h3 className="text-GREYLIGHT1 text-sm">{imageTag}</h3>
    </div>
  );
};

export default ImageContainer;
