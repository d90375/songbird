import React from 'react';
import Image from 'react-bootstrap/Image';

const Finish = ({score, maxScore}) => {
  return (
    <main>
              <h1 >
                Поздравляем!
              </h1>
              <h4 >
                Вы прошли викторину и набрали {score} из {maxScore} возможных баллов
              </h4>
              { score === maxScore ? ( <Image/>) : null }
    </main>
  );
};

export default Finish;