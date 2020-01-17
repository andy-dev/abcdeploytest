import React, { useContext } from "react";
import { css } from "@emotion/core";
import LeftSideStep from "../components/left-side-step";
import RightSideStep from "../components/right-side-step";
import { UIContext } from "../../providers/UIProvider";

const StepContainer = () => {
  const { rightStepOpenClose } = useContext(UIContext);
  return (
    <div
      className="step-container "
      css={css`
        display: flex;
        height: 100%;
        min-height: 80vh;
        background-color: white;
        padding: 15px;
      `}
    >
      {/* ---------------------------------------------
                   steps LEFT SIDE STEP
         ---------------------------------------------- */}

      <div
        className="box-left"
        css={css`
          flex: ${rightStepOpenClose ? 5 : 1};
        `}
      >
        <LeftSideStep></LeftSideStep>
      </div>

      {/* ---------------------------------------------
                steps RIGHT SIDE STEP
         ---------------------------------------------- */}

      <div
        className="box-right"
        css={css`
          flex: ${rightStepOpenClose ? 5 : 0};
          display: ${rightStepOpenClose ? "initial" : "none"};
          /* background-color: #00746d; */
          padding: 15px;
          background-color: #00539b;
        `}
      >
        <RightSideStep></RightSideStep>
      </div>
    </div>
  );
};

export default StepContainer;
