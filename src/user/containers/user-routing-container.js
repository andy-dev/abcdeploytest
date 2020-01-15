import React from "react";
import { Router, Link, navigate } from "@reach/router";
import UserDashboardContainer from "./user-dashboard-container.js";

const UserRoutingContainer = props => {
  return (
    <>
      <Router>
        <UserDashboardContainer
          path="/"
          user={props.user}
        ></UserDashboardContainer>
      </Router>
    </>
  );
};

export default UserRoutingContainer;
