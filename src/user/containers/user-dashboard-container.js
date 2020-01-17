import React, { useContext } from "react";
import TopHat from "../../common/top-hat.js";
import SideNav from "../../common/side-nav.js";
import { UIContext } from "../../providers/UIProvider.js";
import PipelineHeader from "../../common/pipeline-header.js";
import PipelineCard from "../../common/pipeline-card.js";
import {
  FiDatabase,
  FiCheck,
  FiFlag,
  FiLayers,
  FiFile,
  FiArrowRight
} from "react-icons/fi";
import { navigate } from "@reach/router";

const UserDashboardContainer = () => {
  const { sideNavOpenClose, toggleUIComponent } = useContext(UIContext);

  const startPipeline = () => {
    navigate(`/step/1`);
  };

  return (
    <>
      <TopHat toggleUIComponent={toggleUIComponent}></TopHat>
      <SideNav sideNavOpenClose={sideNavOpenClose}></SideNav>
      <PipelineHeader
        header="Your current Pipelines"
        subheader="Your current Pipelines"
        btnLabel="Start Pipeline"
        btnCb={startPipeline}
      ></PipelineHeader>
      <PipelineCard
        header="Pipeline 1"
        sourceBkgColor="blueviolet"
        sourceIcon={<FiFile></FiFile>}
        targetBkgColor="green"
        targetIcon={<FiDatabase></FiDatabase>}
      ></PipelineCard>
    </>
  );
};

export default UserDashboardContainer;
