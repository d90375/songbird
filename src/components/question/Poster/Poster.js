import React from "react";
import Image from "react-bootstrap/Image";

import "./poster.scss";

const Poster = ({ image }) => {
  return (
    <>
      <Image className="random-image"  rounded thumbnail fluid src={image} />
    </>
  );
};

export default Poster;
