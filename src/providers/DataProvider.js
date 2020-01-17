import React, { Component, createContext } from "react";

import { mainRoute } from "../../data-interface.js";

export const DataContext = createContext({
  currentStep: null,
  currentStepOption: null,
  currentOptionSubStep: null
});

class DataProvider extends Component {
  state = {
    currentStep: null,
    currentStepOption: null,
    currentOptionSubStep: null
  };

  componentDidMount() {
    // get first step
    this.setState({ currentStep: this.getStepByStepNumber(1) });
  }

  getStepByStepNumber = stepNumber => {
    return mainRoute
      .filter(step => {
        if (step.stepNumber === stepNumber) {
          return step;
        }
      })
      .pop();
  };

  getStepOption = (stepNumber, optionNumber) => {
    return this.getStepByStepNumber(stepNumber)
      .stepOptions.filter(option => {
        if (option.optionNumber === optionNumber) {
          return option;
        }
      })
      .pop();
  };

  getOptionSubStep = (stepNumber, optionNumber, optionSubStepNumber) => {
    return this.getStepOption(stepNumber, optionNumber)
      .optionSubSteps.filter(optionSubStep => {
        if (optionSubStep.optionNumber === optionSubStepNumber) {
          return optionSubStep;
        }
      })
      .pop();
  };

  toggleUIComponent = key => {
    this.setState({ [key]: !this.state[key] });
  };

  updateCurrentStep = stepNumber => {
    let number = parseInt(stepNumber, 10);
    this.setState({
      currentStep: this.getStepByStepNumber(number)
    });
  };

  updateCurrentStepOption = (stepNumber, optionNumber) => {
    let number = parseInt(stepNumber, 10);
    let optNumber = parseInt(optionNumber, 10);

    // update current STEP OPTION
    this.setState({
      currentStepOption: this.getStepOption(number, optNumber)
    });

    // when we change STEP OPTION WE ALWAYS SET SUBSTEP TO FIRST
    this.setState({
      currentOptionSubStep: this.getOptionSubStep(number, optNumber, 1)
    });
  };

  updateCurrentOptionSubStep = (
    stepNumber,
    optionNumber,
    optionSubStepNumber
  ) => {
    let number = parseInt(stepNumber, 10);
    let optNumber = parseInt(optionNumber, 10);
    let optSubStepNumber = parseInt(optionSubStepNumber, 10);

    this.setState({
      currentOptionSubStep: this.getOptionSubStep(
        number,
        optNumber,
        optSubStepNumber
      )
    });
  };

  clearOptionSubStep = () => {
    this.setState({ currentOptionSubStep: null });
  };

  render() {
    const { currentStep, currentStepOption, currentOptionSubStep } = this.state;
    const { children } = this.props;

    return (
      <DataContext.Provider
        value={{
          currentStep,
          currentStepOption,
          currentOptionSubStep,
          updateCurrentStep: this.updateCurrentStep,
          clearOptionSubStep: this.clearOptionSubStep,
          updateCurrentStepOption: this.updateCurrentStepOption,
          updateCurrentOptionSubStep: this.updateCurrentOptionSubStep
        }}
      >
        {children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
