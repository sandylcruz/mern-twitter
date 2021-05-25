import { useDispatch } from "react-redux";

import { signup as signupAction } from "../actions/sessionActions";
import SignupForm from "./SignupForm";

const SignupFormContainer = () => {
  const signedIn = state.session.isSignedIn;
  const dispatch = useDispatch();
  const signup = dispatch(signupAction(user));

  return <SignupForm signup={signup} />;
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
