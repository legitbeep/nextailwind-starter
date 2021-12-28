import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("Invalid email");
      return;
    }
    if (password.length < 8) {
      alert("Minimum password length is 8.");
      return;
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="button w-full my-2">
        Submit
      </button>
    </form>
  );
};

export default Form;
