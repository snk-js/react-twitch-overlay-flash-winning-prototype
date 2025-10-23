"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export const useConfettiEffect = (trigger: number) => {
  useEffect(() => {
    if (trigger === 0) return;

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, [trigger]);
};
