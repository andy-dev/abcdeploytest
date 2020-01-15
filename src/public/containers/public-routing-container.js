import React from "react";
import { Router } from "@reach/router";
import HomeContainer from "./home-container.js";

const PublicRoutingContainer = () => {
  return (
    <>
      <Router>
        <HomeContainer path="/"></HomeContainer>
      </Router>
    </>
  );
};

export default PublicRoutingContainer;
