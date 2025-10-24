
1. From the last change I have tried to decouple into a even more encapsulation of the effects, because I feel the need to isolate them so that I can create a well managed sequence of them, dynamically with code. The following prompt let to these changes:
   1. ```"create a minimum descent style for the buttons, render them dynamically like an array of effects and fix reseting the animations, because after each one been called, only the confetti is reactivated from 0 on pressing each of the buttons"```

2. I wanted to introduce and start making my concept of winning screen more robust and with intended results adding more effects and creating a manageable effects tunning in a timeline, prompt made the current changes done:
   1. 
   ```
   "I wanted to improve that idea to a concept that I idealized, creating a more coordinated sequence of effects. My idea is that I can create a timeline where some effects starts before the appearance of the other ones. 
   
   2 new effects should be created and I wanted to stack them like this:
   an overlay darknening the whole screen slightly Victory letters been placed from left to right the confetti emoji is removed;
   
   darkening screen appears first after 0.3 seconds, Victory word starts its letter placing sequentially, together with flashbang after words been placed, confetti gets fired"
   ```
3. Prompt:
   1. ```"now I want to create an explosion effect, like a circle stripe growing and expading from center to outer"```
   2. after that prompt I have copied a primitive explosion effect:
      1. 
      ```
      "use client";

        export const ExplosionRing = () => {
        return (
            <div
            className="explosion-ring fixed pointer-events-none opacity-0 z-35"
            style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                border: "8px solid #FFD700",
                boxShadow: `
                0 0 20px 5px rgba(255, 215, 0, 0.8),
                0 0 40px 10px rgba(255, 165, 0, 0.6),
                inset 0 0 20px rgba(255, 255, 255, 0.5)
                `,
            }}
            />
        );
        };
      ```
      2. 
      ```
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
                scale: 8,
                opacity: 0,
                rotation: 180,
                duration: 1.2,
                ease: "power2.out",
                });
            },
            { dependencies: [trigger] }
        );
        };
      ```
      3. After that I have done the current change by changing variables manually and adapting to main VictoryScene

4. In this Last change I asked AI to: improve glitch effect, and turn it into a more modern glitch
