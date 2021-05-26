import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signup as signupAction } from "../actions/sessionActions";
import SignupForm from "./SignupForm";

const SignupFormContainer = (props) => {
  const signedIn = useSelector((state) => state.session.isSignedIn);
  const dispatch = useDispatch();

  // const signup = dispatch(signupAction(user));

  const signup = useCallback(
    (user) => {
      dispatch(signupAction(user));
    },
    [dispatch]
  );

  return (
    <SignupForm
      {...props}
      processForm={signup}
      formType={signup}
      signedIn={signedIn}
    />
  );
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
