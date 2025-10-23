"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useDarkenEffect = (trigger: number, delay: number = 0) => {
  useGSAP(
    () => {
      if (trigger === 0) return;

      gsap.timeline({ delay }).to(".dark-overlay", {
        opacity: 0.9,
        duration: 1.2,
        ease: "power2.out",
      });
    },
    { dependencies: [trigger] }
  );
};
