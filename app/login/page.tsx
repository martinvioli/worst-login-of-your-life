"use client";

import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorCount, setErrorCount] = useState(0);

  const handleLogin = () => {
    if (!username || !password) {
      alert("✅ los campos son obligaortorios!");
      resetFields();
      return;
    }
    if (username.includes("@")) {
      alert("✅ no es nesesario agregar el @ al email");
      resetFields();
      return;
    }
    if (password.length < 12) {
      alert("✅la contrasenia debe tener al menos 12 caracteres");
      resetFields();
      return;
    }

    const uppercaseCount = password
      .split("")
      .filter(
        (char) => char === char.toUpperCase() && /[A-Z]/.test(char)
      ).length;
    if (uppercaseCount < 3) {
      alert(
        "✅ la contrasenia debe incluir masomenos 3 mayusculas (Ejemplo de algunas letras mayusculas: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)"
      );
      resetFields();
      return;
    }

    const numberCount = password
      .split("")
      .filter((char) => /[0-9]/.test(char)).length;

    if (numberCount < 4) {
      alert("✅ deberia haber al menos 4 numeros. Ejemplo: 1, 3, 4, 5, 8, 9");
      resetFields();
      return;
    }

    if (
      password.includes("2") ||
      password.includes("6") ||
      password.includes("7") ||
      password.includes("0")
    ) {
      alert(
        "✅ ni el 2, ni el 6, ni el 7, ni el 0 estaban en el ejemplo. para que los agregaste?"
      );
      resetFields();
      return;
    }

    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const specialCharCount = password
      .split("")
      .filter((char) => specialChars.includes(char)).length;
    if (specialCharCount < 1) {
      alert(
        "✅ la pw (password, contraseña en ingles) debe incluir al menos un caracter especial (!, @, #, etc.)."
      );
      resetFields();
      return;
    }
    if (errorCount === 0) {
      setErrorCount((prevCount) => prevCount + 1);
      alert(
        "✅ por desgracia ocurrió un error, por favor proba nuevamente de nuevo"
      );
      resetFields();
      return;
    } else {
      alert("❌ te logueaste!. Clickea en ACEPTAR para ir al HOME.");
      setTimeout(() => {
        window.location.replace(
          "https://www.youtube.com/watch?v=x1N8VI4kQao&ab_channel=CesarDanielMoro"
        );
      }, 500);
    }
  };

  const resetFields = () => {
    setUsername("");
    setPassword("");
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
        placeholder={"Email".split("").join("\n")}
        rows={username.length || "Email".length}
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
          resize: "none",
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
