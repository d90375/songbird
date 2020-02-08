import React, { useContext, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import birdsData from "../../config/birdsData";
import "./question.scss";
import BirdContext from "../../store/context/context";
import Info from "./Info";
import Poster from "./Poster";

const Question = () => {
  const { level, success } = useContext(BirdContext);
  const { audio, name, species, image } = birdsData[level][0];

  useEffect(() => {}, []);

  return (
    <Jumbotron className="random-question d-flex">
      <Poster image={image} />
      <div className="random-container">
        <Info audio={audio} name={name} species={species} speciesVisible={false} />
      </div>
    </Jumbotron>
  );
};

export default Question;
