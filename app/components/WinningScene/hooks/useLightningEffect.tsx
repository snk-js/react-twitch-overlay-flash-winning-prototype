"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useLightningEffect = (trigger: number, delay: number = 0) => {
  useGSAP(
    () => {
      if (trigger === 0) {
        gsap.set(".lightning-stripe", {
          scaleX: 0,
          opacity: 0,
          filter: "blur(0px) brightness(1)",
        });
        return;
      }

      gsap
        .timeline({ delay })
        .set(".lightning-stripe", {
          scaleX: 0,
          opacity: 1,
          filter: "blur(0px) brightness(1)",
        })
        .to(".lightning-stripe", {
          scaleX: 1,
          duration: 0.06,
          ease: "none",
        })
        .to(
          ".lightning-stripe",
          {
            filter: "blur(8px) brightness(2)",
            duration: 0.03,
            ease: "power2.out",
          },
          "-=0.03"
        )
        .to(".lightning-stripe", {
          filter: "blur(4px) brightness(1.5)",
          duration: 0.05,
          ease: "power2.inOut",
        })
        .to(".lightning-stripe", {
          filter: "blur(0px) brightness(1)",
          opacity: 0,
          duration: 0.1,
          ease: "power2.in",
        })
        .to(".lightning-stripe", {
          filter: "blur(0px) brightness(1)",
          opacity: 1,
          duration: 0,
          ease: "power2.inOut",
        })
        .to(".lightning-stripe", {
          filter: "blur(3px) brightness(1)",
          opacity: 0.2,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(".lightning-stripe", {
          filter: "blur(3px) brightness(0)",
          opacity: 1,
          duration: 0.5,
          ease: "power2.in",
          scaleX: 0,
        });
    },
    { dependencies: [trigger] }
  );
};
