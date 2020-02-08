import React, { useContext } from "react";
import "./description.scss";
import Card from "react-bootstrap/Card";
import Info from "../question/Info";
import BirdContext from "../../store/context/context";
import birdsData from "../../config/birdsData";
import Poster from "../question/Poster";

const Description = () => {
  const { descriptionId, level } = useContext(BirdContext);
  const birdsList = birdsData[level];
  const { description, audio, name, species, image } = birdsList[descriptionId];

  return (
    <div className="col-md-6">
      <Card className="description">
        {/*<p className="instruction">*/}
        {/*  <span>Послушайте плеер.</span>*/}
        {/*  <span>Выберите птицу из списка</span>*/}
        {/*</p>*/}
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
