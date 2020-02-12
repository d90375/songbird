import React from "react";
import Image from "react-bootstrap/Image";

import "./poster.scss";

const Poster = ({ image, alt }) => {
  return (
    <>
      <Image className="random-image"  rounded thumbnail fluid alt={alt} src={image} />
    </>
  );
};

export default Poster;
