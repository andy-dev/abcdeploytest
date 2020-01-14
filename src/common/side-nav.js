import React, { Component } from "react";
import { gsap, TimelineLite } from "gsap";

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.sideNav = null;
    this.myTween = new TimelineLite({ paused: true });
  }

  toggleSideNav(sideNavOpen) {
    if (sideNavOpen) {
      this.myTween.to(this.sideNav, 1, { x: "0%" }).play();
    } else {
      this.myTween.to(this.sideNav, 1, { x: "-100%" }).play();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sideNavOpen !== this.props.sideNavOpen) {
      this.toggleSideNav(this.props.sideNavOpen);
    }
  }

  render() {
    return <div className="side-nav" ref={div => (this.sideNav = div)}></div>;
  }
}

export default SideNav;
