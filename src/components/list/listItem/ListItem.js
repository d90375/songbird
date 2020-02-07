import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./listitem.scss";

const ListItem = ({ item }) => {
  return (
    <>
      <ListGroup.Item className="listItem" key={item.id}>
        <div className="textItem" />
        {item.name}
      </ListGroup.Item>
    </>
  );
};

export default ListItem;
