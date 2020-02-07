import React, { useContext } from "react";

import "./nextbtn.scss";
import BirdContext from "../../store/context/context";

const NextBtn = () => {
  const { level, setLevel } = useContext(BirdContext);
  let counter = level;

  return (
    <button
      className="btn"
      type="submit"
      onClick={() => {
        setLevel(counter < 5 ? (counter += 1) : 0);
      }}
    >
      Next Level
    </button>
  );
};

export default NextBtn;
