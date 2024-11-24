"use client";

import { forwardRef } from "react";

const Player = forwardRef<
  HTMLDivElement,
  {
    playerPosition: { x: number; y: number };
  }
>(function PlayerWithRef({ playerPosition: { x, y } }, ref) {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
        fontSize: "30px",
        zIndex: 2,
      }}
    >
      🤡
    </div>
  );
});

export default Player;
