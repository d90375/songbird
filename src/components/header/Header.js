import React from "react";
import "./header.scss";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import { LIST_NAME } from "../../constants";
import back from "../../images/logowhiteapr.png";

const Header = () => {
  return (
    <header className="">
      <div className="top-panel d-flex justify-content-between align-items-end mb-4 mr-3">
        <img className="logo" src={back} alt="" />
        <h5>
          Score:
          <span className="score"> 0</span>
        </h5>
      </div>
      <Pagination className="pagination flex-wrap mb-4 ">
        {Object.values(LIST_NAME).map(item => (
          <PageItem className="pageItem" key={item}>
            {item}
          </PageItem>
        ))}
      </Pagination>
    </header>
  );
};

export default Header;
