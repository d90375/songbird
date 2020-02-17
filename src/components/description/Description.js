import React from "react";
import "./description.scss";
import Card from "react-bootstrap/Card";
import Container from "./container/Container";

const Description = ({ birdsList, isClickedIndex }) => {
  return (
    <div className="right" >
      <Card className="description">
        {isClickedIndex === null ? (
          <p className="instruction">
            <span>Listen to the player.</span>
            <span>Select from the list.</span>
          </p>
        ) : (
          <Container birdsList={birdsList} isClickedIndex={isClickedIndex} />
        )}
      </Card>
    </div>
  );
};

export default Description;
