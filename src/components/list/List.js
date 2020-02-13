import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./list.scss";
import ListItem from "./listItem";

const List = ({ setClicker, birdsList, answerList, answer, cancelPlayer, successPlayer  }) => {
  return (
    <div className="left-list col-md-3">
      <ListGroup>
        {Object.values(birdsList).map((item, i) => {
          let itemClass = "";
          if (answerList.includes(i)) {
            itemClass = "cancel";
          } else {
            itemClass = answer === i ? "success" : "";
          }
          return <ListItem itemClass={itemClass} birdName={item.name} key={item.id} i={i} cancelPlayer={cancelPlayer} successPlayer={successPlayer}  setClicker={setClicker}  />;
        })}
      </ListGroup>
    </div>
  );
};

export default List;
