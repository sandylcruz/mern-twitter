import React, { useCallback, useState } from "react";

const SignupForm = React.memo(({ processForm }) => {
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // const componentWillReceiveProps = (nextProps) => {
  //   if (nextProps.signedIn === true) {
  //     history.push("/login");
  //   }
  // };

  const updateEmail = useCallback((event) => {
    setEmail(event.currentTarget.value);
  }, []);

  const updateHandle = useCallback((event) => {
    setHandle(event.currentTarget.value);
  }, []);

  const updatePassword = useCallback((event) => {
    setPassword(event.currentTarget.value);
  }, []);

  const updatePassword2 = useCallback((event) => {
    setPassword2(event.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      let user = {
        email: email,
        handle: handle,
        password: password,
        password2: password2,
      };

      processForm(user);
    },
    [email, handle, password, password2, processForm]
  );

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <div className="signup-form">
          <input
            type="text"
            value={email}
            onChange={updateEmail(email)}
            placeholder="Email"
          />
          <input
            type="text"
            value={handle}
            onChange={updateHandle(handle)}
            placeholder="Handle"
          />
          <input
            type="password"
            value={password}
            onChange={updatePassword(password)}
            placeholder="Password"
          />
          <input
            type="password"
            value={password2}
            onChange={updatePassword2(password2)}
            placeholder="Confirm Password"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
});

export default SignupForm;
