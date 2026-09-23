"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function Typewriter({
  text,
  speed = 80,
  delay = 0,
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    setDisplayedText("");

    timeout = setTimeout(() => {
      let index = 0;

      interval = setInterval(() => {
        index++;

        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      <span className="ml-[1px] animate-pulse">|</span>
    </span>
  );
}