import React, { Component, createContext } from "react";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
    source: null,
    sourceFile: null,
    target: null,
    targetFile: null,
    company: null,
    division: null,
    dataFullLoadOrIncremental: null,
    fileFormat: null,
    filled: null
  };

  componentDidMount() {
    // fetch or get current user
    setTimeout(() => {
      this.setState({ user: "Andy" });
    }, 200);
  }

  updateValue = (key, val) => {
    this.setState({ [key]: val });
  };

  render() {
    const {
      user,
      source,
      sourceFile,
      target,
      targetFile,
      company,
      division,
      dataFullLoadOrIncremental,
      fileFormat,
      filled
    } = this.state;
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
          user,
          user,
          source,
          sourceFile,
          target,
          targetFile,
          company,
          division,
          dataFullLoadOrIncremental,
          fileFormat,
          filled,
          updateValue: this.updateValue
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
