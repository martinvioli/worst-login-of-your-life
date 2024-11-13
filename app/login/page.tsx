"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <textarea
        placeholder="Username"
        rows={100}
        cols={1}
        style={ {color: "black"} }
        value={username.split("").join("\n")}
        onChange={(e) => setUsername(e.target.value.replace(/(\r\n|\n|\r)/gm, ""))}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
