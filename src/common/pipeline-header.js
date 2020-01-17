import React, { Component } from "react";
import { css } from "@emotion/core";
import AbcButton from "./abc-button";

class PipelineHeader extends Component {
  constructor(props) {
    super(props);
  }

  OnButtonClick = () => {
    this.props.btnCb();
  };

  render() {
    return (
      <div
        className="progress-header-container"
        css={css`
          display: flex;
          flex-grow: 1;
          padding: 10px;
          background-color: white;
          @media (max-width: 320px) {
            flex-wrap: wrap;
          }
        `}
      >
        <div
          className="box-left"
          css={css`
            flex: 8;
            @media (max-width: 320px) {
              text-align: center;
              padding: 5px;
            }
          `}
        >
          <h1 className="">{this.props.header}</h1>
          <p className="">{this.props.subheader}</p>
        </div>
        <div
          className="box-right"
          css={css`
            flex: 4;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-right: 10px;
            @media (max-width: 320px) {
              justify-content: center;
              padding: 5px;
            }
          `}
        >
          <AbcButton
            OnButtonClickCB={this.OnButtonClick}
            buttonLabel={this.props.btnLabel}
          ></AbcButton>
        </div>
      </div>
    );
  }
}

export default PipelineHeader;
