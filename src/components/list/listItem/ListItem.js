import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import './listitem.scss'

const ListItem = ({ i, onClick, itemClass, birdName }) => {


  return (
    <>
      <ListGroup.Item onClick={() => onClick(i)} className="listItem">
        <div className={`cornerItem ${itemClass}`} />
        {birdName}
      </ListGroup.Item>
    </>
  );
};

export default ListItem;
