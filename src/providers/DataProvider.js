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

    // set initial option to be first option of step 1
    // this.setState({ currentStepOption: this.getStepOption(1, 1) });

    // set initial subStep to first option of stepOptions
    // this.setState({ currentOptionSubStep: this.getOptionSubStep(1, 1, 1) });
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
    console.log("warning updating current step");
    let number = parseInt(stepNumber, 10);
    this.setState({
      currentStep: this.getStepByStepNumber(number)
    });
  };

  updateCurrentStepOption = (stepNumber, optionNumber) => {
    console.log("warning updating current option");
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
          updateCurrentStepOption: this.updateCurrentStepOption,
          clearOptionSubStep: this.clearOptionSubStep
        }}
      >
        {children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
