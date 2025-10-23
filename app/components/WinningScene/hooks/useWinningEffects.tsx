"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export const useFlashbangEffect = (trigger: boolean) => {
  useGSAP(
    () => {
      if (!trigger) return;

      gsap
        .timeline()
        .to(".overlay", {
          backgroundColor: "white",
          opacity: 1,
          duration: 0.1,
        })
        .to(".overlay", {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
    },
    { dependencies: [trigger] }
  );
};

export const useGlitchEffect = (trigger: boolean) => {
  useGSAP(
    () => {
      if (!trigger) return;

      gsap.to(".victory-text", {
        keyframes: [
          { x: -2, y: 2, filter: "hue-rotate(90deg)" },
          { x: 2, y: -2, filter: "hue-rotate(-90deg)" },
          { x: 0, y: 0, filter: "hue-rotate(0deg)" },
        ],
        duration: 0.2,
        repeat: 5,
      });
    },
    { dependencies: [trigger] }
  );
};

export const useConfettiEffect = (trigger: boolean) => {
  useEffect(() => {
    if (!trigger) return;

    confetti({
      particleCount: 100,
      spread: 70,
    });
  }, [trigger]);
};
