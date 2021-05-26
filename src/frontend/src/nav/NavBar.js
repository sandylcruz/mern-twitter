import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ loggedIn, logout }) => {
  const logoutUser = (e) => {
    e.preventDefault();
    logout();
  };

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div>
          <h1>Logged in</h1>
          <Link to={"/tweets"}>All Tweets</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/new_tweet"}>Write a Tweet</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Not logged in</h1>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Chirper</h1>
      {getLinks()}
    </div>
  );
};

export default NavBar;
