import React, { Component, createContext } from "react";

export const UIContext = createContext({
  modalOpenClose: false,
  sideNavOpenClose: false,
  metaDataPanelOpenClose: false,
  optionSubStepPanelOpenClose: false
});

class UIProvider extends Component {
  state = {
    modalOpenClose: false,
    sideNavOpenClose: false,
    metaDataPanelOpenClose: false,
    optionSubStepPanelOpenClose: false
  };

  componentDidMount() {
    // fetch or get current user
  }

  toggleUIComponent = key => {
    this.setState({ [key]: !this.state[key] });
  };

  render() {
    const {
      modalOpenClose,
      sideNavOpenClose,
      metaDataPanelOpenClose,
      optionSubStepPanelOpenClose
    } = this.state;
    const { children } = this.props;

    return (
      <UIContext.Provider
        value={{
          modalOpenClose,
          sideNavOpenClose,
          metaDataPanelOpenClose,
          optionSubStepPanelOpenClose,
          toggleUIComponent: this.toggleUIComponent
        }}
      >
        {children}
      </UIContext.Provider>
    );
  }
}

export default UIProvider;
