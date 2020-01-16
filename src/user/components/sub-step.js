import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/core";

import { DataContext } from "../../providers/DataProvider";
import OptionCard from "./option-card";
import { navigate } from "@reach/router";

const SubStep = props => {
  const { currentOptionSubStep, updateCurrentOptionSubStep } = useContext(
    DataContext
  );

  useEffect(() => {});

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const selectSubStepOption = opt => {
    console.log("option selected! go to next sub step", opt);
    // go to next option sub step
    props.goToNextOptionSubStep();
  };

  return (
    <>
      {currentOptionSubStep.optionQuestion !== null && (
        <>
          <h3
            css={css`
              width: 100%;
              padding-bottom: 10px;
            `}
          >
            {currentOptionSubStep.optionQuestion}
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
            {currentOptionSubStep.optionSubStepOptions.map((opt, i) => {
              return (
                <OptionCard
                  key={i}
                  opt={opt}
                  bgColor={getRandomColor()}
                  selectOption={selectSubStepOption}
                ></OptionCard>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default SubStep;
