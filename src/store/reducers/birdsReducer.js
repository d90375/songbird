import { CHANGE_LEVEL, NEW_GAME, SET_WINNER } from "../types";

import { POINT, MAX } from "../../constants";

const birdsReducer = (state, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case CHANGE_LEVEL:
      if (stateCopy.level === action.payload.data.length - 1) {
        stateCopy.finish = true;
      }
      stateCopy.targetIndex = action.payload.currentRndIndex;
      stateCopy.level += 1;
      stateCopy.answer = null;
      stateCopy.isClickedIndex = null;
      stateCopy.nextLevel = false;
      stateCopy.answerList = [];
      stateCopy.isStop = false;
      return stateCopy;
    case NEW_GAME:
      stateCopy.level = 0;
      stateCopy.score = 0;
      stateCopy.targetIndex = action.payload.newGameRndIndex;
      stateCopy.answer = null;
      stateCopy.isClickedIndex = null;
      stateCopy.nextLevel = false;
      stateCopy.answerList = [];
      stateCopy.finish = false;
      stateCopy.isStop = false;
      return stateCopy;
    case SET_WINNER:
      stateCopy.isClickedIndex = action.payload.index;

      if (stateCopy.answerList.includes(action.payload.index) || stateCopy.answer === stateCopy.targetIndex) {
        return stateCopy;
      }
      stateCopy.answer = action.payload.index;
      if (action.payload.index === stateCopy.targetIndex) {
        action.payload.successPlayer.current.play();
        stateCopy.isStop = true;
        stateCopy.score = stateCopy.score + MAX - POINT * stateCopy.answerList.length;
        stateCopy.nextLevel = true;
      } else {
        action.payload.cancelPlayer.current.play();
        stateCopy.answerList.push(action.payload.index);
      }
      return stateCopy;

    default:
      return state;
  }
};

export default birdsReducer;
