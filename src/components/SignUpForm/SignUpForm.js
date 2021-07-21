import React, { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert(`${email} ${password}`);
        }}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="example@mail.com" />
        <label>Password</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
