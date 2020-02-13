import React from "react";
import Image from "react-bootstrap/Image";
import award from "../../assetes/img/AWARD.gif";
import './finish.scss'

const Finish = ({ score, maxScore }) => {
  return (
    <main className='finish'>
      <h1>Поздравляем!</h1>
      <h4>
        Вы прошли викторину и набрали {score} из {maxScore} возможных баллов
      </h4>

      {score === maxScore ? <Image rounded thumbnail fluid className='awardImg' src={award} /> : null}
    </main>
  );
};

export default Finish;
