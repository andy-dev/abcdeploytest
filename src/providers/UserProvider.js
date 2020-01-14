import React, { Component, createContext } from "react";

export const UserContext = createContext();

class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "andy",
      source: null,
      target: null
    };
  }

  updateValue = (key, val) => {
    this.setState({ [key]: val });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          updateValue: this.updateValue
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
