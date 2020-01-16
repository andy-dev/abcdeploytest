import React, { useContext } from "react";
import { render } from "react-dom";

// Providers
import UserProvider from "./providers/UserProvider.js";
import DataProvider from "./providers/DataProvider.js";
import UIProvider from "./providers/UIProvider.js";

// Context
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
    <DataProvider>
      <UIProvider>
        <App></App>
      </UIProvider>
    </DataProvider>
  </UserProvider>,
  document.getElementById("root")
);
