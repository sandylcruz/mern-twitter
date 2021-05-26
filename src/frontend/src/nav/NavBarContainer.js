import { useSelector } from "react-redux";
import { logout } from "../actions/sessionActions";

import NavBar from "./NavBar";

const NavBarContainer = ({ logout }) => {
  const loggedIn = useSelector((state) => state.session.isAuthenticated);

  return <NavBar loggedIn={loggedIn} logout={logout} />;
};

export default NavBarContainer;
