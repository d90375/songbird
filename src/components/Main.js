import React, { useContext, useEffect, useRef } from "react";
import Question from "./question";
import List from "./list";
import Description from "./description";
import BirdsContext from "../store/context/BirdsContext";
import successAudio from "../assetes/audio/success.mp3";
import cancelAudio from "../assetes/audio/cancel.mp3";

const Main = ({ birdsList }) => {
  const { targetIndex, nextLevel, level, answer, isClickedIndex, answerList, setClicker } = useContext(BirdsContext);
  const { audio, name, image } = birdsList[targetIndex];

  useEffect(() => {
    console.log(`if you need to test the game the WINNER is ${birdsList[targetIndex].name} !`);
  }, [birdsList, targetIndex, level]);

  const successPlayer = useRef();
  const cancelPlayer = useRef();

  return (
    <>
      <Question audio={audio} name={name} image={image} nextLevel={nextLevel} />
      <div className="row-mb-2 bottom-container">
        <List
          step={level}
          birdsList={birdsList}
          answer={answer}
          answerList={answerList}
          setClicker={setClicker}
          successPlayer={successPlayer}
          cancelPlayer={cancelPlayer}
        />
        <Description birdsList={birdsList} isClickedIndex={isClickedIndex} />
      </div>
      <audio src={successAudio} ref={successPlayer} />
      <audio src={cancelAudio} ref={cancelPlayer} />
    </>
  );
};

export default Main;
