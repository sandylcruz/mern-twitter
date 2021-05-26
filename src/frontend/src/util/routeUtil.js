import React from "react";
import { Route, Redirect } from "react-router-dom";

export const AuthRoute = React.memo(
  ({ component: Component, path, exact, loggedIn }) => {
    return (
      <Route
        path={path}
        exact={exact}
        render={(props) =>
          !loggedIn ? <Component {...props} /> : <Redirect to="/tweets" />
        }
      />
    );
  }
);

export const ProtectedRoute = React.memo(
  ({ component: Component, loggedIn, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
);
