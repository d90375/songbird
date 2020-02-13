import React from "react";
import "./header.scss";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import { LIST_NAME } from "../../constants";
import back from "../../assetes/img/logowhiteapr.png";


const Header = ({score,level}) => {


  return (
    <header className="header">
      <div className="top-panel">
        <img className="logo" src={back} alt="" />
        <h5 className='score-title'>
          SCORE <span className="score"> {score}</span>
        </h5>
      </div>
      <Pagination className="pagination flex-wrap mb-4 overflow-hidden" >
        {Object.values(LIST_NAME).map((item, index) => (
          <PageItem className="pageItem" key={item} active={level === index}>
            {item}
          </PageItem>
        ))}
      </Pagination>
    </header>
  );
};

export default Header;
