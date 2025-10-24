"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useDarkenEffect = (trigger: number, delay: number = 0) => {
  useGSAP(
    () => {
      if (trigger === 0) {
        gsap.set(".dark-overlay", { opacity: 0 });
        return;
      }

      gsap.timeline({ delay }).to(".dark-overlay", {
        opacity: 0.6,
        duration: 1.2,
        ease: "power2.out",
      });
    },
    { dependencies: [trigger] }
  );
};
