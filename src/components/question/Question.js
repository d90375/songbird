import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./question.scss";
import Image from "react-bootstrap/Image";
import Info from "./Info";
import Poster from "./Poster";
import rndImg from "../../assetes/img/bird.06a46938.jpg";

const Question = ({ nextLevel, audio, name, image }) => {
  return (
    <div className='top row-mb-2'>
      <div className='top-container col-md-3' >
        {nextLevel ? (
          <Poster alt={name} image={image} />
        ) : (
          <Image className="random-image"  alt={rndImg} src={rndImg} />
        )}
      </div>
      <Jumbotron className="random-question d-flex col-mb-9">
        <div className="random-container">
          <Info audio={audio} name={name} nextLevel={nextLevel} speciesVisible={false} />
        </div>
      </Jumbotron>
    </div>
  );
};

export default Question;
