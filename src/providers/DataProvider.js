import React, { Component, createContext } from "react";

import { mainRoute } from "../../data-interface.js";

export const DataContext = createContext({
  currentStep: null,
  currentSubStep: null
});

class DataProvider extends Component {
  state = {
    currentStep: null,
    currentSubStep: null
  };

  componentDidMount() {
    this.setState({ currentStep: this.getStepByStepNumber(1) });

    this.getOption(1, 1);

    this.getOptionSubStep(1, 1, 1);
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

  getOption = (stepNumber, optionNumber) => {
    return this.getStepByStepNumber(stepNumber)
      .stepOptions.filter(option => {
        if (option.optionNumber === optionNumber) {
          return option;
        }
      })
      .pop();
  };

  getOptionSubStep = (stepNumber, optionNumber, optionSubStepNumber) => {
    return this.getOption(stepNumber, optionNumber)
      .optionSubSteps.filter(optionSubStep => {
        if (optionSubStep.optionSubStepNumber === optionSubStepNumber) {
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

  render() {
    const { currentStep, currentSubStep } = this.state;
    const { children } = this.props;

    return (
      <DataContext.Provider
        value={{
          currentStep,
          currentSubStep,
          updateCurrentStep: this.updateCurrentStep
        }}
      >
        {children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
