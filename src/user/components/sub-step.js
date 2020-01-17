import React, { useContext, useEffect, useState } from "react";
import { css } from "@emotion/core";

import { DataContext } from "../../providers/DataProvider.js";
import { UserContext } from "../../providers/UserProvider.js";
import OptionCard from "./option-card";
import { navigate } from "@reach/router";

const SubStep = props => {
  const { currentOptionSubStep, updateCurrentOptionSubStep } = useContext(
    DataContext
  );

  const {
    company,
    division,
    dataFullLoadOrIncremental,
    fileFormat,
    updateValue
  } = useContext(UserContext);

  useEffect(() => {});

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const selectSubStepOption = (optNum, opt) => {
    console.log("option selected! go to next sub step", opt);

    if (company === null) {
      updateValue("company", opt.optionName);
      props.goToNextOptionSubStep();
      return;
    }
    if (division === null) {
      updateValue("division", opt.optionName);
      props.goToNextOptionSubStep();
      return;
    }
    if (dataFullLoadOrIncremental === null) {
      updateValue("dataFullLoadOrIncremental", opt.optionName);
      props.goToNextOptionSubStep();
      return;
    }
    if (fileFormat === null) {
      updateValue("fileFormat", opt.optionName);
      console.log("heeere");
      navigate(`/step`);
      return;
    }

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
              color: white;
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
                  cardColor="#00539b"
                  bc="black"
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
