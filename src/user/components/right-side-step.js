import React, { useContext } from "react";
import { css } from "@emotion/core";
import { Router, Link, navigate } from "@reach/router";

import RightStep from "./right-step.js";

const RightSideStep = () => {
  return (
    <>
      <Router>
        <RightStep path=":stepNumber/stepOption/:optionNumber/optionSubStep/:optionSubStepNumber"></RightStep>
        <RightStep path=":stepNumber"></RightStep>
      </Router>
    </>
  );
};

export default RightSideStep;
