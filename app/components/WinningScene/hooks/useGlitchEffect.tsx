"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useGlitchEffect = (
  trigger: boolean,
  selector: string = ".victory-text"
) => {
  useGSAP(() => {
    if (!trigger) return;

    gsap.to(selector, {
      keyframes: [
        { x: -2, y: 2, filter: "hue-rotate(90deg)" },
        { x: 2, y: -2, filter: "hue-rotate(-90deg)" },
        { x: 0, y: 0, filter: "hue-rotate(0deg)" },
      ],
      duration: 0.2,
      repeat: 5,
    });
  }, [trigger, selector]);
};
