"use client";

import { useState, useEffect, createRef } from "react";
import Level from "../_components/level";
import Player from "../_components/player";

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
    if (playerRef.current && levelRef.current) {
      if (
        y + playerRef.current.getBoundingClientRect().height >
          levelRef.current?.getBoundingClientRect().height ||
        x + playerRef.current.getBoundingClientRect().width >
          levelRef.current?.getBoundingClientRect().width ||
        y < 0 ||
        x < 0
      ) {
        return;
      }
    }
    setPlayerPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const playerRef = createRef<HTMLDivElement>();
  const levelRef = createRef<HTMLDivElement>();

  return (
    <Level ref={levelRef} playerRef={playerRef}>
      <Player ref={playerRef} playerPosition={playerPosition}></Player>
    </Level>
  );
};

export default Screen;
