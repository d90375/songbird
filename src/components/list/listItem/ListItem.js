import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./listitem.scss";
import BirdContext from "../../../store/context/context";

const ListItem = ({ item }) => {
  const { success, setDescriptionId } = useContext(BirdContext);

  return (
    <>
      <ListGroup.Item onClick={() => {setDescriptionId(item.id)}} className="listItem" >
        <div className="cornerItem" />
        {item.name}
      </ListGroup.Item>
    </>
  );
};

export default ListItem;
