import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import AudioPlayer from "../../../containers/AudioPlayer";

import "./info.scss";

const Info = ({ name, species, audio, speciesVisible, }) => {
  // const isWin = isNextStepAvailable ? { name } : ;

  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h3>{name}</h3>
        </ListGroup.Item>
        {speciesVisible && (
          <ListGroup.Item>
            <h5>{species}</h5>
          </ListGroup.Item>
        )}
        <ListGroup.Item>
          <div className="audio-player">
            <AudioPlayer url={audio} />
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default Info;
