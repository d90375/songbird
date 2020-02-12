import React, { useContext } from "react";
import "./app.scss";
import Button from "react-bootstrap/Button";
import Header from "./components/header";
import Main from "./components/Main";
import Finish from "./components/Finish";
import NextBtn from "./components/nextBtn";
import BirdsContext from "./store/context/BirdsContext";
import BIRDS_DATA from "./config/birdsData";

const App = () => {

  const {setClicker} = useContext(BirdsContext)

  const {

  } = useContext(BirdsContext);

  return (
    <>
      <Header score={score} step={level} />
      { ? (
        <Finish score={score} maxScore={maxScore} />
      ) : (
        <Main

        />
      )}
      { ? <NextBtn currentBirdsData={BIRDS_DATA} /> : null}
      { ? <Button onClick={setNewGame(BIRDS_DATA)}>Попробовать еще раз</Button> : null}
    </>
  );
};

export default App;
