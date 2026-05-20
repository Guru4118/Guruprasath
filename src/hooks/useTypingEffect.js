import { useState, useEffect } from "react";

/**
 * Typewriter effect hook.
 * @param {string} text - The string to type out
 * @param {number} speed - Ms per character (default 200)
 * @param {number} pauseAfter - Ms to pause after finishing before restart (default 6000)
 */
export const useTypingEffect = (text, speed = 200, pauseAfter = 6000) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, pauseAfter);
      return () => clearTimeout(resetTimer);
    }
  }, [index, text, speed, pauseAfter]);

  return displayed;
};
