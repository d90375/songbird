import { CHNAGE_LEVEL } from "../types";

const BirdReducer = (state, action) => {
  switch (action.type) {
    case CHNAGE_LEVEL:
      return { ...state, level: action.payload };

    default:
      return state;
  }
};

export default BirdReducer;
