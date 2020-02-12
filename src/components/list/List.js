import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./list.scss";
import ListItem from "./listItem";

const List = ({  onClick, birds, tries, answer }) => {
  return (
    <div className="col-md-6">
      <ListGroup>

        {Object.values(birds).map((bird, i) => {
          // eslint-disable-next-line no-nested-ternary
          const itemClass = tries.includes(i) ? "cancel" : answer === i ? "success" : "";
          return <ListItem itemClass={itemClass} birdName={bird.name} key={i} i={i} onClick={onClick} />;
          // setDescId={setDescId}
        })}
      </ListGroup>
    </div>
  );
};

export default List;
