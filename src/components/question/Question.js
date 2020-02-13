import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./question.scss";
import Image from "react-bootstrap/Image";
import Info from "./Info";
import Poster from "./Poster";
import rndImg from "../../assetes/img/bird.06a46938.jpg";

const Question = ({ nextLevel, audio, name, image }) => {
  return (
    <Jumbotron className="random-question d-flex">
      {nextLevel ? (
        <Poster alt={name} image={image} />
      ) : (
        <Image className="random-image" rounded thumbnail fluid alt={rndImg} src={rndImg} />
      )}
      <div className="random-container">
        <Info audio={audio} name={name} nextLevel={nextLevel} speciesVisible={false} />
      </div>
    </Jumbotron>
  );
};

export default Question;
