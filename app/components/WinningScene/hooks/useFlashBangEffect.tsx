"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useFlashbangEffect = (trigger: boolean) => {
  useGSAP(() => {
    if (!trigger) return;

    gsap
      .timeline()
      .to(".overlay", {
        backgroundColor: "white",
        opacity: 1,
        duration: 0.1,
      })
      .to(".overlay", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
  }, [trigger]);
};
