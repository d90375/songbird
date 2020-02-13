import { START_LEVEL } from "../constants";

const getRandomIndex = (data, level) => {
  if (!data[level]) {
    return 0;
  }

  const currentDataLength = data[level].length;
  return Math.floor(Math.random() * (currentDataLength - START_LEVEL));
};

export default getRandomIndex;
