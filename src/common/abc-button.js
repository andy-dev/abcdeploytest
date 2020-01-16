import React, { Component } from "react";
import { css } from "@emotion/core";

class AbcButton extends Component {
  OnButtonClickCB = () => {
    this.props.OnButtonClickCB();
  };

  render() {
    return (
      <button
        onClick={() => this.OnButtonClickCB()}
        className="abc-button"
        css={css`
          background-color: #002b5c;
          border: 2px solid #002b5c;
          color: #fff;
          border-radius: 4px;
          line-height: 24.75px;
          padding-bottom: 7.5px;
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 7.5px;
          text-align: center;
          cursor: pointer;
          font-size: 15px;

          :hover {
            background-color: #00539b;
          }
        `}
      >
        {this.props.buttonLabel}
      </button>
    );
  }
}

export default AbcButton;
