import React, { Component, useContext } from "react";
import { render } from "react-dom";
import TopHat from "./common/top-hat.js";
import SideNav from "./common/side-nav.js";
import { Router } from "@reach/router";

// Context
import UserProvider from "./providers/UserProvider";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideNavOpen: false
    };

    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  toggleSideNav() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    });
  }

  render() {
    return (
      <>
        <UserProvider>
          <TopHat toggleSideNav={this.toggleSideNav}></TopHat>
          <SideNav sideNavOpen={this.state.sideNavOpen}></SideNav>
          <p>Deployment Worked</p>
        </UserProvider>
      </>
    );
  }
}

render(<App></App>, document.getElementById("root"));
