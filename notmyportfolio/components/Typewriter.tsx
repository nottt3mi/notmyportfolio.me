"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  pauseAfterPeriod?: number;
  className?: string;
}

export default function Typewriter({
  text,
  speed = 80,
  delay = 0,
  pauseAfterPeriod = 800,
  className = "",
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (index >= text.length) return;

      const nextCharacter = text[index];
      index++;

      setDisplayedText(text.slice(0, index));

      // Si acaba de escribir un punto, hacemos una pausa más larga
      const nextDelay =
        nextCharacter === "." || nextCharacter === "!"
          ? pauseAfterPeriod
          : speed;

      timeoutId = setTimeout(typeNextCharacter, nextDelay);
    };

    timeoutId = setTimeout(typeNextCharacter, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, pauseAfterPeriod]);

  return (
    <span className={className}>
      {displayedText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}