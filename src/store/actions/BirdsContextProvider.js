import React, { useReducer } from "react";
import { CHANGE_LEVEL, NEW_GAME, SET_WINNER } from "../types";
import BirdsContext from "../context/BirdsContext";
import birdsReducer from "../reducers/birdsReducer";
import { MAX } from "../../constants";
import BIRDS_DATA from "../../config/birdsData";
import getGuessedIndex from "../../utils/utils";

const BirdsContextProvider = ({ children }) => {
  const initialState = {
    score: 0,
    level: 0,
    answer: null,
    nextStep: false,
    answerList: [],
    finish: false,
    maxScore: MAX * BIRDS_DATA.length,
    isClicked: null,
    targetIndex: getGuessedIndex(BIRDS_DATA, 0)
  };

  const [state, dispatch] = useReducer(birdsReducer, initialState);

  const setLevel = data => {
    dispatch({
      type: CHANGE_LEVEL,
      payload: data
    });
  };

  const setNewGame = data => {
    dispatch({
      type: NEW_GAME,
      payload: data
    });
  };

  const setClicker = index => {
    dispatch({
      type: SET_WINNER,
      payload: index
    });
  };

  return (
    <BirdsContext.Provider
      value={{
    
        setLevel,
        setNewGame,
        setClicker
      }}
    >
      {children}
    </BirdsContext.Provider>
  );
};

export default BirdsContextProvider;
