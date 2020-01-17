import React, { Component } from "react";
import { css } from "@emotion/core";
import { Line } from "rc-progress";

class ProgressBar extends Component {
  render() {
    return (
      <div
        className="progress-bar-container"
        css={css`
          display: flex;
          flex-grow: 1;
          margin-top: 0;
          padding-left: 10px;
          padding-right: 10px;
          padding-bottom: 20px;
          background-color: white;
          @media (max-width: 320px) {
          }
        `}
      >
        <div
          className="box"
          css={css`
            flex: 1;
            @media (max-width: 320px) {
            }
          `}
        >
          <Line percent={20} strokeWidth=".2" strokeColor="#00539b"></Line>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
