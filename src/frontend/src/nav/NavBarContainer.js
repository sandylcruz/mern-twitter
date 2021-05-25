import { useSelector } from "react-redux";
import { logout } from "../actions/sessionActions";

import LoginForm from "../session/LoginForm";

const NavBarContainer = ({ logout }) => {
  const loggedIn = useSelector((state) => state.session.isAuthenticated);

  return <LoginForm loggedIn={loggedIn} logout={logout} />;
};

export default NavBarContainer;
