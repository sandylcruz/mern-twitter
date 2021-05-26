import React, { useCallback, useState } from "react";

const LoginForm = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let user = {
      email: email,
      password: password,
    };

    login(user);
  };

  const updateEmail = useCallback((event) => {
    setEmail(event.currentTarget.value);
  }, []);

  const updatePassword = useCallback((event) => {
    setPassword(event.currentTarget.value);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={email}
            onChange={updateEmail}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={updatePassword}
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
