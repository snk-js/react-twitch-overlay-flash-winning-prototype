"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export const useConfettiEffect = (trigger: boolean, options = {}) => {
  useEffect(() => {
    if (!trigger) return;

    confetti({
      particleCount: 100,
      spread: 70,
      ...options,
    });
  }, [trigger, options]);
};
