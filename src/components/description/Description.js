import React from "react";
import "./description.scss";
import Card from "react-bootstrap/Card";
import Container from "./container/Container";

const Description = ({ birdsList, isClickedIndex }) => {
  return (
    <div className="col-md-9">
      <Card className="description">
        {isClickedIndex === null ? (
          <p className="instruction">
            <span>Послушайте плеер.</span>
            <span>Выберите птицу из списка</span>
          </p>
        ) : (
          <Container birdsList={birdsList} isClickedIndex={isClickedIndex} />
        )}
      </Card>
    </div>
  );
};

export default Description;
