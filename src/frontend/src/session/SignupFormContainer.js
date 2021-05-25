import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { signup as signupAction } from "../actions/sessionActions";
import SignupForm from "./SignupForm";

const SignupFormContainer = (props) => {
  const signedIn = isSignedIn;
  const dispatch = useDispatch();
  const signup = dispatch(signupAction(user));

  const processForm = useCallback(
    (user) => {
      dispatch(signup(user));
    },
    [dispatch, signup]
  );

  return <SignupForm {...props} processForm={processForm} formType={signup} />;
};

// const mapStateToProps = (state) => {
//   return {
//     signedIn: state.session.isSignedIn,
//     errors: state.errors.session,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signup: (user) => dispatch(signup(user)),
//   };
// };

export default SignupFormContainer;
