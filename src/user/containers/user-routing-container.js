import React from "react";
import { Router, Link, navigate } from "@reach/router";
import UserDashboardContainer from "./user-dashboard-container.js";
import PipelineContainer from "./pipeline-container.js";
import StepContainer from "./step-container.js";
import Step from "../components/step.js";

const UserRoutingContainer = props => {
  return (
    <>
      <Router>
        <UserDashboardContainer
          path="/"
          user={props.user}
        ></UserDashboardContainer>
        <PipelineContainer path="step/*"></PipelineContainer>
      </Router>
    </>
  );
};

export default UserRoutingContainer;
