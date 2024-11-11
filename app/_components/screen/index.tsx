"use client";

import { useState, useCallback, useEffect } from "react";
import Level from "../level";
import Player from "../player";

const Screen = () => {
  const [playerPosition, setPlayerPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const handleUserKeyPress = (event: any) => {
    const { keyCode } = event;
    let { x, y } = playerPosition;
    switch (keyCode) {
      case 37:
        x -= 5;
        break;
      case 38:
        y -= 5;
        break;
      case 39:
        x += 5;
        break;
      case 40:
        y += 5;
        break;
      default:
        break;
    }
    setPlayerPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);
  return (
    <Level>
      <Player playerPosition={playerPosition}></Player>
    </Level>
  );
};

export default Screen;
