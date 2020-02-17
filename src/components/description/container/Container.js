import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Poster from "../../question/Poster";
import Info from "../../question/Info";

const Container = ({ birdsList, isClickedIndex }) => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [audio, setAudio] = useState();
  const [species, setSpecies] = useState();
  const [description, setDescription] = useState();
  const [birth, setBirth] = useState();

  useEffect(() => {
    const { name, audio, image, species, description, birth } = birdsList[isClickedIndex];
    setName(name);
    setImage(image);
    setAudio(audio);
    setSpecies(species);
    setDescription(description);
    setBirth(birth);
  }, [isClickedIndex]);

  return (
    <>
      <Card.Body className="description-card">
        <Poster className="description-image" image={image} />
        <Info audio={audio} name={name} species={species} birth={birth} speciesVisible />
      </Card.Body>
      <span className="description-text">{description}</span>
    </>
  );
};

export default Container;
