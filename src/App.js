import React, { useContext, useEffect, useState } from "react";
import "./app.scss";
import Button from "react-bootstrap/Button";
import Header from "./components/header";
import Main from "./components/Main";
import Finish from "./components/Finish";
import NextBtn from "./components/nextBtn";
import BirdsContext from "./store/context/BirdsContext";
import BIRDS_DATA from "./config/birdsData";
import getRandomIndex from './utils/utils';

const App = () => {
  const { score, maxScore, level, finish, nextLevel, setNewGame } = useContext(BirdsContext);

  const [rnd, setRnd] = useState(null);

  useEffect(() => {
    setRnd(getRandomIndex(BIRDS_DATA, level));
  }, [level]);

  return (
    <>
      <Header score={score} level={level} />
      {finish ? <Finish score={score} maxScore={maxScore} /> : <Main birdsList={BIRDS_DATA[level]} />}
      {nextLevel ? <NextBtn currentBirdsData={BIRDS_DATA} currentRandomIndex={rnd} /> : null}
      {finish ? (
        <Button onClick={() => setNewGame(BIRDS_DATA, getRandomIndex(BIRDS_DATA, 0))}>Попробовать еще раз</Button>
      ) : null}
    </>
  );
};

export default App;
