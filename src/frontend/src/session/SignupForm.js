import React, { useState } from "react";

const SignupForm = React.memo(({ signup }) => {
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // const componentWillReceiveProps = (nextProps) => {
  //   if (nextProps.signedIn === true) {
  //     history.push("/login");
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      email: email,
      handle: handle,
      password: password,
      password2: password2,
    };

    signup(user);
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <input
            type="text"
            value={email}
            onChange={setEmail(email)}
            placeholder="Email"
          />
          <input
            type="text"
            value={handle}
            onChange={setHandle(handle)}
            placeholder="Handle"
          />
          <input
            type="password"
            value={password}
            onChange={setPassword(password)}
            placeholder="Password"
          />
          <input
            type="password"
            value={password2}
            onChange={setPassword2(password2)}
            placeholder="Confirm Password"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
});

export default SignupForm;
