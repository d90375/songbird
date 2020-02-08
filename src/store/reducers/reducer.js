import { CHANGE_LEVEL, CHANGE_DESCRIPTION, SUCCESS } from "../types";

const BirdReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LEVEL:
      return { ...state, level: action.payload };
    case CHANGE_DESCRIPTION:
      return { ...state, descriptionId: action.payload };
    case SUCCESS:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};

export default BirdReducer;
