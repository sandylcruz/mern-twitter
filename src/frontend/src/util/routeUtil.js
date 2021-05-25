import React, { Component } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

export const Auth = React.memo(
  ({ component: Component, path, loggedIn, exact }) => {
    const loggedIn = state.session.isAuthenticated;

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

export const Protected = React.memo(
  ({ component: Component, loggedIn, ...rest }) => {
    const loggedIn = state.session.isAuthenticated;

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
