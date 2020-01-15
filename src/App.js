import React, { useContext } from "react";
import { render } from "react-dom";

// Context
import UserProvider from "./providers/UserProvider.js";
import { UserContext } from "./providers/UserProvider.js";

// Containers
import UserRoutingContainer from "./user/containers/user-routing-container.js";
import PublicRoutingContainer from "./public/containers/public-routing-container.js";

const App = () => {
  const { user } = useContext(UserContext);

  if (user !== null) {
    return (
      <React.StrictMode>
        <UserRoutingContainer user={user} />
      </React.StrictMode>
    );
  } else {
    return (
      <React.StrictMode>
        <PublicRoutingContainer />
      </React.StrictMode>
    );
  }
};

render(
  <UserProvider>
    <App></App>
  </UserProvider>,
  document.getElementById("root")
);
