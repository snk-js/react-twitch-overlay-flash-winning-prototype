"use client";

import { useEffect, useState } from "react";

interface SequenceTriggers {
  darken: number;
  letterReveal: number;
  flashbang: number;
  glitch: number;
  confetti: number;
}

export const useVictorySequence = (mainTrigger: number) => {
  const [triggers, setTriggers] = useState<SequenceTriggers>({
    darken: 0,
    letterReveal: 0,
    flashbang: 0,
    glitch: 0,
    confetti: 0,
  });

  useEffect(() => {
    if (mainTrigger === 0) return;

    // Reset all triggers
    setTriggers({
      darken: 0,
      letterReveal: 0,
      flashbang: 0,
      glitch: 0,
      confetti: 0,
    });

    // Sequence timeline
    const timeouts: NodeJS.Timeout[] = [];

    // 1. Darken screen immediately
    timeouts.push(
      setTimeout(() => {
        setTriggers((prev) => ({ ...prev, darken: prev.darken + 1 }));
      }, 0)
    );

    // 2. After 0.3s: Letter reveal + flashbang
    timeouts.push(
      setTimeout(() => {
        setTriggers((prev) => ({
          ...prev,
          letterReveal: prev.letterReveal + 1,
          flashbang: prev.flashbang + 1,
        }));
      }, 300)
    );

    // 3. After letters are placed (0.3s + 0.7s for stagger): confetti + glitch
    timeouts.push(
      setTimeout(() => {
        setTriggers((prev) => ({
          ...prev,
          confetti: prev.confetti + 1,
          glitch: prev.glitch + 1,
        }));
      }, 1000)
    );

    // Cleanup
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [mainTrigger]);

  return triggers;
};
