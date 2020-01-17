import React, { useContext, useState, useEffect } from "react";
import { css } from "@emotion/core";
import { UIContext } from "../../providers/UIProvider.js";
import { DataContext } from "../../providers/DataProvider.js";
import FileUpload from "./file-upload.js";
import { navigate } from "@reach/router";
import ListSchemas from "./list-schemas.js";
import SubStep from "./sub-step.js";

const RightStep = props => {
  const {
    currentStepOption,
    currentOptionSubStep,
    updateCurrentStepOption,
    updateCurrentOptionSubStep,
    clearOptionSubStep
  } = useContext(DataContext);

  const { rightStepOpenClose, toggleUIComponent } = useContext(UIContext);
  const [currentStepOptionNumber, updateCurrentStepOptionNumber] = useState(
    null
  );

  const [
    currentOptionSubStepNumber,
    updateCurrentOptionSubStepNumber
  ] = useState(null);

  useEffect(() => {
    // url has optionNumber then get option

    if (
      props.optionNumber !== undefined &&
      props.optionNumber !== currentStepOptionNumber
    ) {
      updateCurrentStepOptionNumber(props.optionNumber);
      updateCurrentStepOption(props.stepNumber, props.optionNumber);

      // open right step
      if (rightStepOpenClose === false) {
        toggleUIComponent("rightStepOpenClose");
      }
    }

    // optionSubStep url changed
    if (
      props.optionSubStepNumber !== undefined &&
      props.optionSubStepNumber !== currentOptionSubStepNumber
    ) {
      updateCurrentOptionSubStepNumber(props.optionSubStepNumber);
      updateCurrentOptionSubStep(
        props.stepNumber,
        props.optionNumber,
        props.optionSubStepNumber
      );
    }

    // user goes back or url changes and route no longer has optionNumber
    if (props.optionNumber === undefined && currentOptionSubStep !== null) {
      if (rightStepOpenClose === true) {
        // close
        toggleUIComponent("rightStepOpenClose");
      }
      // clearOptionSubStep();
    }
  });

  const closeRightSideStep = () => {
    toggleUIComponent("rightStepOpenClose");
  };

  const goToNextOptionSubStep = () => {
    let numberOfOptionSubSteps = currentStepOption.optionSubSteps.length;
    let currentOptionSubStepNumber = currentOptionSubStep.optionNumber;
    if (numberOfOptionSubSteps > currentOptionSubStepNumber) {
      navigate(`${currentOptionSubStepNumber + 1}`);
    } else {
      goToNextStep();
    }
  };

  const goToNextStep = () => {
    let stepNumber = parseInt(props.stepNumber, 10);
    navigate(`/step/${stepNumber + 1}`);
  };

  return (
    <>
      {currentOptionSubStep !== null && (
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
            {currentOptionSubStep.optionQuestion === "fileChooser" && (
              <FileUpload
                buttonLabel="Choose File"
                goToNextOptionSubStep={goToNextOptionSubStep}
              ></FileUpload>
            )}
            {/* list schemas */}
            {currentOptionSubStep.optionQuestion === "listSchemas" && (
              <ListSchemas
                goToNextOptionSubStep={goToNextOptionSubStep}
              ></ListSchemas>
            )}
            {/* normal question */}
            {currentOptionSubStep.optionQuestion !== "listSchemas" &&
              currentOptionSubStep.optionQuestion !== "fileChooser" && (
                <SubStep
                  goToNextOptionSubStep={goToNextOptionSubStep}
                ></SubStep>
              )}

            {/* <pre>
             <code>{JSON.stringify(props, null, 4)}</code>
           </pre> */}
          </div>
        </div>
      )}
      {currentOptionSubStep === null && <p>hide step</p>}
    </>
  );
};

export default RightStep;
