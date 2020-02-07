import React, { useContext } from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import ListGroup from "react-bootstrap/ListGroup";
import rnd from "../../images/bird.06a46938.jpg";
import birdsData from "../../config/birdsData";
import "./question.scss";
import BirdContext from "../../store/context/context";
import AudioPlayer from "../../containers/AudioPlayer";

const Question = () => {
  const { level } = useContext(BirdContext);

  const url = birdsData[level][0].audio;
  return (
    <Jumbotron className="random-question d-flex">
      <Image className="random-image" rounded thumbnail fluid src={birdsData[level][0].image} />
      <div  className='random-container'>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>*****</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="audio-player">
              <AudioPlayer url={url} />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Jumbotron>
  );
};

export default Question;
