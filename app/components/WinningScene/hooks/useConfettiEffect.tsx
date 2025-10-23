"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export const useConfettiEffect = (trigger: number, delay: number = 0) => {
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (trigger === 0) return;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [trigger, delay]);
};
