import React, { useContext } from "react";
import TopHat from "../../common/top-hat.js";
import SideNav from "../../common/side-nav.js";
import { UIContext } from "../../providers/UIProvider.js";
import StepContainer from "./step-container.js";
import { navigate } from "@reach/router";

const PipelineContainer = () => {
  const { sideNavOpenClose, toggleUIComponent } = useContext(UIContext);

  const nextStep = () => {
    navigate(`2`);
  };
  return (
    <>
      <TopHat toggleUIComponent={toggleUIComponent}></TopHat>
      <SideNav sideNavOpenClose={sideNavOpenClose}></SideNav>

      <h1>Pipeline Container</h1>
      <button onClick={nextStep}>Navigate</button>
      <StepContainer></StepContainer>
    </>
  );
};

export default PipelineContainer;
