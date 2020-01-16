import React, { useContext } from "react";
import { Router, Link, navigate } from "@reach/router";
import Step from "./step";

const LeftSideStep = () => {
  return (
    <>
      <Router>
        <Step path=":stepNumber/*"></Step>
      </Router>
    </>
  );
};

export default LeftSideStep;
