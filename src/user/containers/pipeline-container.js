import React, { useContext } from "react";
import TopHat from "../../common/top-hat.js";
import SideNav from "../../common/side-nav.js";
import { UIContext } from "../../providers/UIProvider.js";
import { UserContext } from "../../providers/UserProvider.js";
import StepContainer from "./step-container.js";
import { navigate } from "@reach/router";
import PipelineHeader from "../../common/pipeline-header.js";
import ProgressBar from "../../common/progress-bar.js";
import SourceAndTargetCard from "../../common/source-and-target-card.js";
import { css } from "@emotion/core";
import LeftToRightArrow from "../../common/left-to-right-arrow.js";

const PipelineContainer = () => {
  const { sideNavOpenClose, toggleUIComponent } = useContext(UIContext);
  const { source, target } = useContext(UserContext);

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
      <div
        css={css`
          display: flex;
          padding: 15px;
        `}
      >
        {source == null && (
          <SourceAndTargetCard
            background="#f6f6f6"
            color="#86868b"
            text="Source"
          ></SourceAndTargetCard>
        )}

        {source !== null && (
          <SourceAndTargetCard
            background="#00539B"
            color="white"
            text={`${source}`}
          ></SourceAndTargetCard>
        )}

        <LeftToRightArrow></LeftToRightArrow>

        {target === null && (
          <SourceAndTargetCard
            background="#f6f6f6"
            color="#86868b"
            text="Target"
          ></SourceAndTargetCard>
        )}

        {target !== null && (
          <SourceAndTargetCard
            background="#820053"
            color="white"
            text={`${target}`}
          ></SourceAndTargetCard>
        )}
      </div>
      <StepContainer></StepContainer>
    </>
  );
};

export default PipelineContainer;
