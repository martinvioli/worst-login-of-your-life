"use client";

import { useEffect, useState } from "react";

type User = {
  email: string;
  password: string;
};

const Login = () => {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      setForm({ email: "", password: "" });
    };
  }, []);

  const handleLogin = ({ email, password }: User) => {
    const localStorageUsers = JSON.parse(
      window.localStorage.getItem("users") ?? ""
    );
    const users: User[] = localStorageUsers || [];
    if (
      users.some((user) => user.email === email && user.password === password)
    ) {
      alert("❌ te logueaste!. Clickea en ACEPTAR para ir al HOME.");
      setTimeout(() => {
        window.location.replace(
          "https://www.youtube.com/watch?v=x1N8VI4kQao&ab_channel=CesarDanielMoro"
        );
      }, 500);
    } else {
      alert("No.");
    }
  };

  return (
    <div style={{ backgroundColor: "turquoise" }}>
      <label
        style={{
          fontSize: "300px",
          backgroundColor: "#ff3ac6",
          padding: "20px",
          color: "#5fa41c",
        }}
      >
        Email
        <input
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          type="string"
          style={{ backgroundColor: "red", color: "green" }}
        ></input>
      </label>
      <label
        style={{
          fontSize: "300px",
          backgroundColor: "#ff3ac6",
          padding: "20px",
          color: "#5fa41c",
        }}
      >
        Contraseña
        <input
          value={form.password}
          onChange={(event) =>
            setForm({ ...form, password: event.target.value })
          }
          type="string"
          style={{ backgroundColor: "red", color: "green" }}
        ></input>
      </label>
      <button
        onClick={() =>
          handleLogin({ email: form.email, password: form.password })
        }
        style={{ fontSize: "10px", fontWeight: "bold" }}
      >
        LOJIARSE
      </button>
    </div>
  );
};

export default Login;
