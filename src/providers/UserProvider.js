import React, { Component, createContext } from "react";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    // fetch or get current user
    setTimeout(() => {
      this.setState({ user: "Andy" });
    }, 2000);
  }

  updateValue = (key, val) => {
    this.setState({ [key]: val });
  };

  render() {
    const { user } = this.state;
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
          user: user,
          updateValue: this.updateValue
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
