import React from "react";
import "./description.scss";
import Card from "react-bootstrap/Card";
import Info from "../question/Info";
import Poster from "../question/Poster";

const Description = ({ data }) => {
  const { name, audio, image, species, description } = data;
  return (
    <div className="col-md-6">
      <Card className="description">
        <p className="instruction">
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
        <Card.Body style={{ display: "flex" }}>
          <Poster image={image} />
          <Info audio={audio} name={name} species={species} speciesVisible />
        </Card.Body>
        <span className="description-text">{description}</span>
      </Card>
    </div>
  );
};

export default Description;
