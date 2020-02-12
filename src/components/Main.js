import React from "react";
import Question from "./question";
import List from "./list";
import Description from "./description";

const Main = ({ guessIndex, birds, isNextStepAvailable,  answer, tries, onClick, step }) => {
  const { audio, name, image } = birds[guessIndex];

  return (
    <>
      <Question audio={audio} name={name} image={image} isNextStepAvailable={isNextStepAvailable} />
      <div className="row mb2">
        <List step={step} birds={birds} answer={answer} tries={tries} onClick={onClick} />

        <Description data={birds[0]} />
      </div>
    </>
  );
};

export default Main;
