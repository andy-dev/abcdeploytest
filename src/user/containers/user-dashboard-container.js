import React, { useContext } from "react";
import TopHat from "../../common/top-hat.js";
import SideNav from "../../common/side-nav.js";
import { UIContext } from "../../providers/UIProvider.js";

const UserDashboardContainer = () => {
  const { sideNavOpenClose, toggleUIComponent } = useContext(UIContext);

  return (
    <>
      <TopHat toggleUIComponent={toggleUIComponent}></TopHat>
      <SideNav sideNavOpenClose={sideNavOpenClose}></SideNav>
      <h1>User Dashboard Container</h1>
    </>
  );
};

export default UserDashboardContainer;
