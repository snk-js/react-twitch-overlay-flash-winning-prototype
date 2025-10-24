"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useGlitchEffect = (trigger: number, delay: number = 0) => {
  useGSAP(
    () => {
      if (trigger === 0) {
        gsap.set(".victory-container", {
          x: 0,
          y: 0,
          skewX: 0,
          filter: "none",
        });
        gsap.set(".victory-letter", {
          x: 0,
          textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
        });
        return;
      }

      const tl = gsap.timeline({ delay });

      const glitchBursts = [
        { intensity: 1, duration: 0.03 },
        { intensity: 0.5, duration: 0.02 },
        { intensity: 1.5, duration: 0.03 },
        { intensity: 0.8, duration: 0.05 },
        { intensity: 1.2, duration: 0.02 },
        { intensity: 0.6, duration: 0.01 },
        { intensity: 1.8, duration: 0.03 },
        { intensity: 0.4, duration: 0.01 },
        { intensity: 1, duration: 0.03 },
        { intensity: 0.5, duration: 0.02 },
        { intensity: 1.5, duration: 0.03 },
        { intensity: 0.8, duration: 0.05 },
        { intensity: 1.2, duration: 0.02 },
        { intensity: 0.6, duration: 0.01 },
        { intensity: 1.8, duration: 0.03 },
        { intensity: 0.4, duration: 0.01 },
      ];

      glitchBursts.forEach((burst) => {
        const { intensity, duration } = burst;
        const pause = Math.random() * 0.02 + 0.01;

        tl.to(".victory-container", {
          x: gsap.utils.random(-8, 8) * intensity,
          y: gsap.utils.random(-4, 4) * intensity,
          skewX: gsap.utils.random(-5, 5) * intensity,
          duration: duration,
          ease: "steps(1)",
        })
          .to(
            ".victory-letter",
            {
              textShadow: `
            ${gsap.utils.random(-3, 3) * intensity}px 0 0 #ff0  ,
            ${gsap.utils.random(-3, 3) * intensity}px 0 0 #ff0000,
            ${gsap.utils.random(-3, 3) * intensity}px 0 0 #0000ff,
            0 0 20px rgba(255, 215, 0, 0.5)
          `,
              x: gsap.utils.random(-2, 2) * intensity,
              duration: duration,
              ease: "steps(1)",
              stagger: {
                each: 0.01,
                from: "random",
              },
            },
            "<"
          )
          .to(
            ".victory-container",
            {
              filter: `
            contrast(${100 + gsap.utils.random(-20, 50) * intensity}%)
            brightness(${100 + gsap.utils.random(-10, 30) * intensity}%)
            saturate(${100 + gsap.utils.random(-30, 80) * intensity}%)
          `,
              duration: duration,
              ease: "steps(1)",
            },
            "<"
          )
          .to(".victory-container", {
            x: 0,
            y: 0,
            skewX: 0,
            filter: "none",
            duration: duration * 0.5,
            ease: "power2.out",
          })
          .to(
            ".victory-letter",
            {
              textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
              x: 0,
              duration: duration * 0.5,
              ease: "power2.out",
              stagger: {
                each: 0.01,
                from: "random",
              },
            },
            "<"
          )
          .to({}, { duration: pause });
      });

      tl.set(".victory-container", {
        x: 0,
        y: 0,
        skewX: 0,
        filter: "none",
      }).set(".victory-letter", {
        textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
        x: 0,
      });
    },
    { dependencies: [trigger] }
  );
};
