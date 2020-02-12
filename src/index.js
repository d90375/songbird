import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import BirdsContextProvider from "./store/actions/BirdsContextProvider";

const Index = () => {
  return (
    <>
      <BirdsContextProvider>
        <App />
      </BirdsContextProvider>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
