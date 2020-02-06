import React from "react";
import "./app.scss";
import Header from "./components/header";
import Question from "./components/question";
import List from "./components/list";
import Description from "./components/description";
import NextBtn from "./components/nextBtn";

const App = () => {
  return (
    <>
      <Header />
      <Question />
      <div className="row mb2">
        <List />
        <Description />
        <NextBtn />
      </div>
    </>
  );
};

export default App;
