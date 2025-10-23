"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useGlitchEffect = (trigger: number, delay: number = 0) => {
  useGSAP(
    () => {
      if (trigger === 0) return;

      gsap.timeline({ delay }).to(".victory-container", {
        keyframes: [
          { x: -2, y: 2, filter: "hue-rotate(90deg)" },
          { x: 2, y: -2, filter: "hue-rotate(-90deg)" },
          { x: 0, y: 0, filter: "hue-rotate(0deg)" },
        ],
        duration: 0.15,
        repeat: 20,
      });
    },
    { dependencies: [trigger] }
  );
};
