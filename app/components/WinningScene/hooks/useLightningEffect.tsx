"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useLightningEffect = (trigger: number, delay: number = 0) => {
  useGSAP(
    () => {
      // Reset when trigger is 0
      if (trigger === 0) {
        gsap.set(".lightning-stripe", { scaleX: 0, opacity: 0 });
        return;
      }

      gsap
        .timeline({ delay })
        .set(".lightning-stripe", {
          scaleX: 0,
          opacity: 1,
        })
        .to(".lightning-stripe", {
          scaleX: 1,
          duration: 0.02,
          ease: "none",
        });
    },
    { dependencies: [trigger] }
  );
};
