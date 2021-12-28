import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Form = () => {
  console.log(process.env.NEXT_PUBLIC_GITHUB_ID);
  const { data: session, status } = useSession();
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    //   alert("Invalid email");
    //   return;
    // }
    // if (password.length < 8) {
    //   alert("Minimum password length is 8.");
    //   return;
    // }
    signIn();
  };
  if (session)
    return (
      <div className="my-4 flex items-center flex-col">
        <h4 className="my-2">
          Signed in as: <b>{session.user?.name}</b>
        </h4>
        <button onClick={() => signOut()} className="button my-2">
          Logout
        </button>
      </div>
    );

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/* <input
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
      /> */}
      <button type="submit" className="button my-2">
        Login with Github
      </button>
    </form>
  );
};

export default Form;
