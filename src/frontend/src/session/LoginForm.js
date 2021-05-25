import React, { useState } from "react";

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={email}
            onChange={setEmail("email")}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={setPassword("password")}
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
