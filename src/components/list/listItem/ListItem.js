import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./listitem.scss";

const ListItem = ({
  i,
  setClicker,
  itemClass,
  birdName,
  successPlayer,
  cancelPlayer,
  playbackStatus,
  setPlaybackStatus
}) => {
  return (
    <>
      <ListGroup.Item
        onClick={() => setClicker(i, successPlayer, cancelPlayer, playbackStatus, setPlaybackStatus)}
        className="listItem"
      >
        <div className={`cornerItem ${itemClass}`} />
        {birdName}
      </ListGroup.Item>
    </>
  );
};

export default ListItem;
