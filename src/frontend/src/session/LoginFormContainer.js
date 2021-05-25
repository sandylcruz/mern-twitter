import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../actions/sessionActions";

import LoginForm from "./LoginForm";

const LoginFormContainer = (props) => {
  const dispatch = useDispatch();

  const login = useCallback((user) => dispatch(loginAction(user)), [dispatch]);

  return <LoginForm props={props} login={login} />;
};

export default LoginFormContainer;
