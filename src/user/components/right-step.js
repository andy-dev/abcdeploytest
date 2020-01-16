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
    clearOptionSubStep
  } = useContext(DataContext);

  const { rightStepOpenClose, toggleUIComponent } = useContext(UIContext);
  const [currentStepOptionNumber, updateCurrentStepOptionNumber] = useState(
    null
  );

  console.log(currentOptionSubStep);

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

    // user goes back or url changes and route no longer has optionNumber
    if (props.optionNumber === undefined && currentOptionSubStep !== null) {
      if (rightStepOpenClose === true) {
        // close
        toggleUIComponent("rightStepOpenClose");
      }
      console.log("clearing");
      clearOptionSubStep();
    }
  });

  const closeRightSideStep = () => {
    toggleUIComponent("rightStepOpenClose");
  };

  const goToNextOptionSubStep = () => {
    let numberOfOptionSubSteps = currentStepOption.optionSubSteps.length;
    let currentOptionSubStepNumber = currentOptionSubStep.optionSubStepNumber;

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
            {currentOptionSubStep.optionSubStepQuestion === "fileChooser" && (
              <FileUpload
                buttonLabel="Choose File"
                goToNextOptionSubStep={goToNextOptionSubStep}
              ></FileUpload>
            )}
            {/* list schemas */}
            {currentOptionSubStep.optionSubStepQuestion === "listSchemas" && (
              <ListSchemas
                goToNextOptionSubStep={goToNextOptionSubStep}
              ></ListSchemas>
            )}
            {/* normal question */}
            {currentOptionSubStep.optionSubStepQuestion !== "listSchemas" &&
              currentOptionSubStep.optionSubStepQuestion !== "fileChooser" && (
                <SubStep></SubStep>
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
