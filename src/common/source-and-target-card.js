import React, { Component } from "react";
import { css } from "@emotion/core";

class SourceAndTargetCard extends Component {
  render() {
    return (
      <div
        className="droppable"
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${this.props.background};
          color: ${this.props.color};
          flex-direction: row;
          border: 1px dashed #86868b;
          border-radius: 2px;
          width: 180px;
          height: 180px;
          vertical-align: middle;
          text-align: center;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        `}
      >
        <h2
          css={css`
            font-weight: 300;
            font-size: 22px;
            color: ${this.props.color};
          `}
        >
          {this.props.text}
        </h2>
      </div>
    );
  }
}

export default SourceAndTargetCard;
