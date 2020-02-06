import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./list.scss";

const List = () => {
  return (
    <div className="col-md-6">
      <ListGroup>
        {Object.values([1, 2, 3, 4, 5, 6, 7]).map(item => (
          <ListGroup.Item className="listItem" key={item}>
            <span className="textItem"></span>{item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
