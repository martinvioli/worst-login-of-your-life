"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";


const Level = ({ children }: PropsWithChildren) => {

  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <div style={{ backgroundColor: "white", height: "100vh", width: "100vw" }}>
      {children}
      <button
        onClick={goToLogin}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "red"
        }}
      >
        Ir al login
      </button>
    </div>
  );
};

export default Level;