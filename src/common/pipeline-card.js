import React, { Component } from "react";
import {
  FiDatabase,
  FiCheck,
  FiFlag,
  FiLayers,
  FiFile,
  FiArrowRight
} from "react-icons/fi";
import { css } from "@emotion/core";

class PipelineCard extends Component {
  render() {
    return (
      <div
        className=""
        css={css`
          background: white;
          display: inline-block;
          margin: 10px;
          border-radius: 2px;
          width: 200px;
          height: 340px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);

          :hover {
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
              0 10px 10px rgba(0, 0, 0, 0.22);
          }
        `}
      >
        <div
          className=""
          css={css`
            font-weight: 200;
            padding: 10px;
            text-align: center;
            overflow: hidden;
          `}
        >
          <h3 className="">{this.props.header}</h3>
        </div>
        <div
          className=""
          css={css`
            color: white;
            padding-top: 12px;
            padding-bottom: 5px;
            text-align: center;
            font-size: 25px;
            background-color: ${this.props.sourceBkgColor};
            border-radius: 50%;
            width: 30%;
            transform: translate(25px, 25px);
          `}
        >
          {this.props.sourceIcon}
        </div>

        <div
          css={css`
            position: absolute;
            color: grey;
            transform: translate(92px, -5px);
          `}
        >
          <FiArrowRight></FiArrowRight>
        </div>

        <div
          className=""
          css={css`
            color: white;
            padding-top: 12px;
            padding-bottom: 5px;
            text-align: center;
            font-size: 25px;
            background-color: green;
            border-radius: 50%;
            width: 30%;
            transform: translate(112px, -25px);
          `}
        >
          {this.props.targetIcon}
        </div>
        <div
          className=""
          css={css`
            text-align: center;
            padding: 10px;
            border-bottom: 1px solid lightgray;
          `}
        >
          <div className="">Source: File</div>
          <div className="">Target: EAP</div>
        </div>

        <div
          className=""
          css={css`
            text-align: center;
            padding: 10px;
            border-bottom: 1px solid lightgray;
          `}
        >
          <div className="">
            <div
              className=""
              css={css`
                border-right: 1px solid lightgray;
              `}
            >
              <FiCheck></FiCheck>
            </div>
            <div className="col">
              <FiFlag></FiFlag>
            </div>
          </div>
        </div>
        <div
          className=""
          css={css`
            padding: 20px;
            text-align: center;
          `}
        >
          <button
            className=""
            css={css`
              border: 2px solid lightgray;
              color: #00539b;
              border-radius: 4px;
              line-height: 14.75px;
              padding-bottom: 7.5px;
              padding-left: 30px;
              padding-right: 30px;
              padding-top: 7.5px;
              text-align: center;
              cursor: pointer;
              font-size: 12px;
            `}
          >
            Run
          </button>
        </div>
      </div>
    );
  }
}

export default PipelineCard;
