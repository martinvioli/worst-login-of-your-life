import { PropsWithChildren } from "react";

const Level = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh", width: "100vw" }}>
      {children}
    </div>
  );
};

export default Level;
