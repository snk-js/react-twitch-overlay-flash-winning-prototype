"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useDarkenEffect = (trigger: number) => {
  useGSAP(
    () => {
      if (trigger === 0) return;

      gsap.timeline().to(".dark-overlay", {
        opacity: 0.7,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { dependencies: [trigger] }
  );
};
