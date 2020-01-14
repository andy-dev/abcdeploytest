import React, { Component } from "react";
import { css } from "@emotion/core";
import { FiMenu, FiHome } from "react-icons/fi";

class TopHat extends Component {
  constructor(props) {
    super(props);
  }

  toggleSideNav = () => {
    this.props.toggleSideNav();
  };

  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <div
        className="top-hat-container"
        css={css`
          display: flex;
          flex-grow: 1;
          background: #f2f2f2;
          color: #636466;
          padding: 10px;
          @media (max-width: 320px) {
            padding: 2px;
          }
        `}
      >
        <div
          className="box-left"
          css={css`
            flex: 4;
            .home-icon {
              padding-left: 5px;
            }
          `}
        >
          <span onClick={this.toggleSideNav}>
            <FiMenu></FiMenu>
          </span>
          <span className="home-icon" onClick={this.refreshPage}>
            <FiHome></FiHome>
          </span>
        </div>
        <div
          className="box-right"
          css={css`
            flex: 6;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 10px;
          `}
        >
          <p>Welcome, Andy</p>
        </div>
      </div>
    );
  }
}

export default TopHat;
