import React, { useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import birdsData from "../../config/birdsData";
import "./list.scss";
import BirdContext from "../../store/context/context";
import ListItem from "./listItem";

const List = () => {
  const { level } = useContext(BirdContext);

  return (
    <div className="col-md-6">
      <ListGroup>
        {Object.values(birdsData[level]).map(item => (
          <ListItem item={item} />
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
