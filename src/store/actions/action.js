import React, { useReducer } from "react";

import { CHANGE_LEVEL, CHANGE_DESCRIPTION, SUCCESS } from "../types";

import BirdContext from "../context/context";
import BirdReducer from "../reducers/reducer";

const BirdState = ({ children }) => {
  const initialState = {
    level: 0,
    descriptionId: 1,
    success: null
  };

  const [state, dispatch] = useReducer(BirdReducer, initialState);

  const setLevel = lvl => {
    dispatch({
      type: CHANGE_LEVEL,
      payload: lvl
    });
  };
  const setDescriptionId = id => {
    dispatch({
      type: CHANGE_DESCRIPTION,
      payload: id
    });
  };
  const setStateSuccess = id => {
    dispatch({
      type: SUCCESS,
      payload: id
    });
  };

  return (
    <BirdContext.Provider
      value={{
        level: state.level,
        descriptionId: state.descriptionId,
        success: state.success,
        setStateSuccess,
        setDescriptionId,
        setLevel
      }}
    >
      {children}
    </BirdContext.Provider>
  );
};

export default BirdState;
