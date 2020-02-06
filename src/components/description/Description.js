import React from "react";
import "./description.scss";
import Card from 'react-bootstrap/Card';


const Description = () => {
  return <div className="col-md-6">
    <Card className="Description">
      <p className='instruction'>
        <span>Послушайте плеер.</span>
        <span>Выберите птицу из списка</span>
      </p>
      <Card.Body></Card.Body>
    </Card>
  </div>;
};

export default Description;
