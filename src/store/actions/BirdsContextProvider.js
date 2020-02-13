import React, { useReducer } from "react";
import { CHANGE_LEVEL, NEW_GAME, SET_WINNER } from "../types";
import BirdsContext from "../context/BirdsContext";
import birdsReducer from "../reducers/birdsReducer";
import { MAX, START_LEVEL, START_SCORE } from "../../constants";
import BIRDS_DATA from "../../config/birdsData";
import getRandomIndex from '../../utils/utils';

const BirdsContextProvider = ({ children }) => {
  const initialState = {
    score: START_LEVEL,
    level: START_SCORE,
    answer: null,
    nextLevel: false,
    answerList: [],
    finish: false,
    maxScore: MAX * BIRDS_DATA.length,
    isClickedIndex: null,
    targetIndex: getRandomIndex(BIRDS_DATA, 0),
    stopMainPlayer: false
  };

  const [state, dispatch] = useReducer(birdsReducer, initialState);

  const setLevel = (data, currentRndIndex) => {
    dispatch({
      type: CHANGE_LEVEL,
      payload: { data, currentRndIndex }
    });
  };

  const setNewGame = (data, newGameRndIndex) => {
    dispatch({
      type: NEW_GAME,
      payload: { data, newGameRndIndex }
    });
  };

  const setClicker = (index, successPlayer, cancelPlayer) => {
    dispatch({
      type: SET_WINNER,
      payload: { index, successPlayer, cancelPlayer }
    });
  };

  return (
    <BirdsContext.Provider
      value={{
        level: state.level,
        birdsData: state.birdsData,
        score: state.score,
        finish: state.finish,
        answerList: state.answerList,
        nextLevel: state.nextLevel,
        answer: state.answer,
        maxScore: state.maxScore,
        isClickedIndex: state.isClickedIndex,
        targetIndex: state.targetIndex,
        stopMainPlayer: state.stopMainPlayer,
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
