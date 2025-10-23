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
          x: 1000,
          y: 1000,
          scale: 1,
          rotation: 45,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.1,
          stagger: 0.03,
          ease: "power3.out",
        }
      );
    },
    { dependencies: [trigger] }
  );
};
