"use client";

const Player = ({
  playerPosition: { x, y },
}: {
  playerPosition: { x: number; y: number };
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      🤡
    </div>
  );
};

export default Player;
