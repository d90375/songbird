import React, { useReducer } from "react";

import { CHNAGE_LEVEL } from "../types";

import BirdContext from "../context/context";
import BirdReducer from "../reducers/reducer";

const BirdState = ({ children }) => {
  const initialState = {
    level: 0
  };

  const [state, dispatch] = useReducer(BirdReducer, initialState);

  const setLevel = lvl => {
    dispatch({
      type: CHNAGE_LEVEL,
      payload: lvl
    });
  };

  return (
    <BirdContext.Provider
      value={{
        level: state.level,
        setLevel
      }}
    >
      {children}
    </BirdContext.Provider>
  );
};

export default BirdState;
