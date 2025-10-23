"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useLetterRevealEffect = (trigger: number, delay: number = 0) => {
  useGSAP(
    () => {
      if (trigger === 0) return;

      const letters = gsap.utils.toArray(".victory-letter");

      gsap.timeline({ delay }).fromTo(
        letters,
        {
          opacity: 0,
          y: -50,
          rotationX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );
    },
    { dependencies: [trigger] }
  );
};
