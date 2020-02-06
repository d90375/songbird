import React from "react";

import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import rnd from "../../images/bird.06a46938.jpg";

import "./question.scss";

const Question = () => {
  return (
    <Jumbotron className="random-question">
      <Image rounded thumbnail fluid src={rnd} />
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h3>*****</h3>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="audio-player">
            <audio
              className="overflow-hidden"
              src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
            />
          </div>
          <div className="controls">
            <div className="playback-button"></div>
            <div className="time-bar" style={{ position: "relative" }}></div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Jumbotron>
  );
};

export default Question;
