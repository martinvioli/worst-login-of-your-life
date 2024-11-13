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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "10px",
      }}
    >
      <textarea
        placeholder={"Username".split("").join("\n")}
        rows={username.length || "Username".length}
        cols={1}
        style={{
          color: "black",
          resize: "none",
        }}
        value={username.split("").join("\n")}
        onChange={(e) =>
          setUsername(e.target.value.replace(/(\r\n|\n|\r)/gm, ""))
        }
      />
      <textarea
        placeholder={"Password".split("").join("\n")}
        rows={password.length || "Password".length}
        cols={1}
        style={{
          color: "black",
          resize: "none"
        }}
        value={password.split("").join("\n")}
        onChange={(e) =>
          setPassword(e.target.value.replace(/(\r\n|\n|\r)/gm, ""))
        }
      />
      <button
        onClick={handleLogin}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "red",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
