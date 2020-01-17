import React, { Component } from "react";
import { FiArrowRight } from "react-icons/fi";
import { css } from "@emotion/core";

class LeftToRightArrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        css={css`
          display: flex;
          align-items: center;
          color: #8c9ca8;
          font-size: 25px;
        `}
      >
        <FiArrowRight></FiArrowRight>
      </div>
    );
  }
}

export default LeftToRightArrow;
