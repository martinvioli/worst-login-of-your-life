"use client";

import { useRouter } from "next/navigation";
import {
  createRef,
  forwardRef,
  PropsWithChildren,
  RefObject,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const Level = forwardRef<
  HTMLDivElement,
  { playerRef: RefObject<HTMLDivElement> } & PropsWithChildren
>(function LevelWithRef({ children, playerRef }, ref) {
  const router = useRouter();

  const colliding = (
    AelementRef: RefObject<HTMLDivElement>,
    BelementRef: RefObject<HTMLDivElement>
  ) => {
    if (!AelementRef.current || !BelementRef.current) {
      return;
    }
    const Aelement = AelementRef.current.getBoundingClientRect();
    const Belement = BelementRef.current.getBoundingClientRect();
    return !(
      Aelement.right < Belement.left ||
      Aelement.left > Belement.right ||
      Aelement.bottom < Belement.top ||
      Aelement.top > Belement.bottom
    );
  };

  useLayoutEffect(() => {
    if (colliding(playerRef, loginButtonDivRef)) {
      router.push("/login");
    }
  });

  const loginButtonDivRef = createRef<HTMLDivElement>();

  const screamers = [
    {
      imageSrc: "screamer1.jpeg",
    },
    {
      imageSrc: "screamer2.jpeg",
    },
    {
      imageSrc: "screamer3.png",
    },
  ];

  const [screamer, setScreamer] = useState(screamers[0]);
  const [showScreamer, setShowScreamer] = useState(false);

  const getRandomNumberBetween = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min)) + min;

  const recursiveTimer = (delay = getRandomNumberBetween(10000, 20000)) => {
    return setTimeout(() => {
      setScreamer(screamers[getRandomNumberBetween(0, 3)]);
      setShowScreamer(true);
      audioRef.current?.play();
      return setTimeout(() => {
        setShowScreamer(false);
        return recursiveTimer();
      }, 200);
    }, delay);
  };

  useLayoutEffect(() => {
    const timer = recursiveTimer(8000);

    return () => {
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.volume = 0;
      }
    };
  }, []);

  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div
      ref={ref}
      style={{ backgroundColor: "white", height: "100vh", width: "100vw" }}
    >
      {children}
      <div
        ref={loginButtonDivRef}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "red",
        }}
      >
        Ir al login
      </div>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          backgroundImage: `url(/${screamer.imageSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          zIndex: 3,
          visibility: showScreamer ? "visible" : "hidden",
        }}
      ></div>
      <audio ref={audioRef} preload="auto" src={`/screamer.mp3`}></audio>
    </div>
  );
});

export default Level;
