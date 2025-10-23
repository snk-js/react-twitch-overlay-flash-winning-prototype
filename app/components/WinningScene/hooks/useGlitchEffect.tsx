"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useGlitchEffect = (trigger: number) => {
  useGSAP(
    () => {
      if (trigger === 0) return;

      gsap.to(".victory-container", {
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
