import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/core";

import { DataContext } from "../../providers/DataProvider";
import OptionCard from "./option-card";
import { navigate } from "@reach/router";

const Step = props => {
  // get step and updateFn from store
  const { currentStep, updateCurrentStep } = useContext(DataContext);

  // keep track to see if step # changed in url
  const [currentStepNumber, updateCurrentStepNumber] = useState("1");

  // update component date and update datacontext current step
  useEffect(() => {
    if (props.stepNumber !== currentStepNumber) {
      updateCurrentStepNumber(props.stepNumber);
      updateCurrentStep(props.stepNumber);
    }

    if (currentStep.stepQuestion === null) {
      // go to options

      if (props.location.href.includes("stepOption")) {
        return;
      }

      selectOption(1);
    }
  });

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const selectOption = optionNumber => {
    navigate(
      `/step/${currentStepNumber}/stepOption/${optionNumber}/optionSubStep/1`
    );
  };

  return (
    <>
      {currentStep.stepQuestion === null && <p>just render user selections</p>}

      {currentStep.stepQuestion !== null && (
        <>
          <h3
            css={css`
              width: 100%;
              padding-bottom: 10px;
            `}
          >
            {currentStep.stepQuestion}
          </h3>
          <div
            css={css`
              display: flex;
              padding-top: 15px;
              flex-wrap: wrap;
              @media (max-width: 500px) {
                justify-content: center;
                text-align: center;
              }
            `}
          >
            {currentStep.stepOptions.map((opt, i) => {
              return (
                <OptionCard
                  key={i}
                  opt={opt}
                  bgColor={getRandomColor()}
                  selectOption={selectOption}
                ></OptionCard>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Step;

{
  /* <pre>
  <code>{JSON.stringify(props, null, 4)}</code>
</pre> */
}
