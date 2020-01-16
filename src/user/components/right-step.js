import React, { useContext, useState, useEffect } from "react";
import { css } from "@emotion/core";
import { UIContext } from "../../providers/UIProvider.js";
import { DataContext } from "../../providers/DataProvider.js";
import FileUpload from "./file-upload.js";
import { navigate } from "@reach/router";
import ListSchemas from "./list-schemas.js";

const RightStep = props => {
  const { currentOptionSubStep, updateCurrentStepOption } = useContext(
    DataContext
  );

  console.log(currentOptionSubStep);

  const [currentStepOptionNumber, updateCurrentStepOptionNumber] = useState(
    "1"
  );

  useEffect(() => {
    if (props.optionNumber !== currentStepOptionNumber) {
      updateCurrentStepOptionNumber(props.optionNumber);

      updateCurrentStepOption(props.stepNumber, props.optionNumber);
    }
  });

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
        {/* file chooser */}
        {currentOptionSubStep.optionSubStepQuestion === "fileChooser" && (
          <FileUpload buttonLabel="Choose File"></FileUpload>
        )}
        {/* list schemas */}
        {currentOptionSubStep.optionSubStepQuestion === "listSchemas" && (
          <>
            <p>list schmeas</p>
            <ListSchemas></ListSchemas>
          </>
        )}

        {/* <pre>
          <code>{JSON.stringify(props, null, 4)}</code>
        </pre> */}
      </div>
    </div>
  );
};

export default RightStep;
