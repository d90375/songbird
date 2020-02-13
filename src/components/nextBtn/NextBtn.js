import React, { useContext } from "react";

import "./nextbtn.scss";
import BirdsContext from "../../store/context/BirdsContext";

const NextBtn = ({ currentBirdsData, currentRandomIndex }) => {
  const { setLevel } = useContext(BirdsContext);

  return (
    <button className="btn" type="submit" onClick={() => setLevel(currentBirdsData, currentRandomIndex)}>
      Next Level
    </button>
  );
};

export default NextBtn;
