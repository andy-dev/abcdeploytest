import React, { useContext } from "react";
import TopHat from "../../common/top-hat.js";
import SideNav from "../../common/side-nav.js";
import { UIContext } from "../../providers/UIProvider.js";
import StepContainer from "./step-container.js";
import { navigate } from "@reach/router";
import PipelineHeader from "../../common/pipeline-header.js";
import ProgressBar from "../../common/progress-bar.js";

const PipelineContainer = () => {
  const { sideNavOpenClose, toggleUIComponent } = useContext(UIContext);

  return (
    <>
      <TopHat toggleUIComponent={toggleUIComponent}></TopHat>
      <SideNav sideNavOpenClose={sideNavOpenClose}></SideNav>
      <PipelineHeader
        header="Add new Pipeline"
        subheader="Choose and select from the options below"
        btnLabel=""
        hide={true}
      ></PipelineHeader>
      <ProgressBar></ProgressBar>

      <StepContainer></StepContainer>
    </>
  );
};

export default PipelineContainer;
