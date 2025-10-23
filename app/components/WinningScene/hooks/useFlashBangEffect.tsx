"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useFlashbangEffect = (trigger: number, delay: number = 0) => {
  useGSAP(
    () => {
      if (trigger === 0) return;

      gsap
        .timeline({ delay })
        .to(".flash-overlay", {
          backgroundColor: "white",
          opacity: 1,
          duration: 0.1,
        })
        .to(".flash-overlay", {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
    },
    { dependencies: [trigger] }
  );
};
