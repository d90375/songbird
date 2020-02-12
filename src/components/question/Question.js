import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import "./question.scss";
import Image from 'react-bootstrap/Image';
import Info from "./Info";
import Poster from "./Poster";
import rndImg from '../../images/bird.06a46938.jpg'


const Question = ({ audio, name , image}) => {

  // const [id, setId] = useState(0);
  //
  // const birdsList = birdsData[level];
  // const { audio, name, species, image } = birdsList[id];
  //
  // useEffect(() => {
  //   const randId = Math.floor(Math.random() * 6)
  //   setId(randId);
  //   setRandomId(randId);
  // }, [ level]);


  return (
    <Jumbotron className="random-question d-flex">

      <Poster alt={name} image={image} /> :
      <Image className='random-image' rounded thumbnail fluid  alt={rndImg} src={rndImg} />}
      <div className="random-container">

        {/*species={species}*/}
      </div>
    </Jumbotron>
  );
};

export default Question;
