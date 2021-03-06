import React, { useContext } from "react";
import { css } from "@emotion/core";
import { navigate } from "@reach/router";
import { FiMenu, FiHome } from "react-icons/fi";

const TopHat = props => {
  const toggleSideNav = () => {
    props.toggleUIComponent("sideNavOpenClose");
  };

  const refreshPage = () => {
    navigate("/");
  };

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
        <span onClick={toggleSideNav}>
          <FiMenu></FiMenu>
        </span>
        <span className="home-icon" onClick={refreshPage}>
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
};

export default TopHat;
