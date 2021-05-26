import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/routeUtil";
import { Switch } from "react-router-dom";
import NavBarContainer from "../nav/NavBarContainer";

import MainPage from "./mainPage";
import LoginFormContainer from "../session/LoginFormContainer";
import SignupFormContainer from "../session/SignupFormContainer";

const App = React.memo(() => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
));

export default App;
