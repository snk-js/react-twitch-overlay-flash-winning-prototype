"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useExplosionEffect = (trigger: number, delay: number = 0) => {
  useGSAP(
    () => {
      // Reset when trigger is 0
      if (trigger === 0) {
        gsap.set(".explosion-ring", {
          scale: 0,
          opacity: 0,
          rotation: 0,
        });
        return;
      }

      gsap
        .timeline({ delay })
        .set(".explosion-ring", {
          scale: 0,
          opacity: 1,
          rotation: 0,
        })
        .to(".explosion-ring", {
          scale: 5,
          opacity: 0,
          rotation: 180,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(".explosion-ring", {
          scale: 1,
          opacity: 0,
          rotation: 180,
          duration: 1,
          ease: "bounce.inOut",
        });
    },
    { dependencies: [trigger] }
  );
};
