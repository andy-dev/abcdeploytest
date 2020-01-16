import React, { useContext } from "react";
import { css } from "@emotion/core";
import { UIContext } from "../../providers/UIProvider.js";

const RightStep = props => {
  const { toggleUIComponent } = useContext(UIContext);

  const closeRightSideStep = () => {
    toggleUIComponent("rightStepOpenClose");
  };

  return (
    <div>
      <div
        css={css`
          text-align: right;
        `}
      >
        <button
          role="button"
          css={css`
            background-color: transparent;
            border: none;
            color: darkgray;
            line-height: 24.75px;
            padding-bottom: 7.5px;
            padding-left: 30px;
            padding-right: 30px;
            padding-top: 7.5px;
            text-align: center;
            cursor: pointer;
            font-size: 30px;
            margin-top: 15px;
            font-weight: 200;

            :hover {
              color: #00539b;
            }
          `}
          onClick={closeRightSideStep}
        >
          X
        </button>
      </div>
      <div>
        <h1>STEP</h1>
        <pre>
          <code>{JSON.stringify(props, null, 4)}</code>
        </pre>
      </div>
    </div>
  );
};

export default RightStep;
