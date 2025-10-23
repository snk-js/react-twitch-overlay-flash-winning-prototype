"use client";

import { useState } from "react";
import { useDarkenEffect } from "./hooks/useDarkenEffect";
import { useLetterRevealEffect } from "./hooks/useLetterRevealEffect";
import { useFlashbangEffect } from "./hooks/useFlashBangEffect";
import { useGlitchEffect } from "./hooks/useGlitchEffect";
import { useLightningEffect } from "./hooks/useLightningEffect";

const VictoryScene = () => {
  const [victoryTrigger, setVictoryTrigger] = useState(0);

  // All effects use the same trigger but with different delays
  useDarkenEffect(victoryTrigger, 0); // Starts immediately
  useLightningEffect(victoryTrigger, 0); // Lightning flash
  useLetterRevealEffect(victoryTrigger, 0.4); // After 0.4s
  useFlashbangEffect(victoryTrigger, 0.42); // After 0.42s (with letters)
  useGlitchEffect(victoryTrigger, 0.6); // After 0.6s

  const triggerVictory = () => {
    setVictoryTrigger((prev) => prev + 1);
  };

  const victoryLetters = "VICTORY".split("");

  return (
    <div className="relative w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Dark Overlay */}
      <div className="dark-overlay fixed inset-0 bg-black opacity-0 pointer-events-none z-10" />

      {/* Flash Overlay */}
      <div className="flash-overlay fixed inset-0 opacity-0 pointer-events-none z-20" />

      {/* Lightning Stripe - Horizontal Band */}
      <div
        className="lightning-stripe fixed left-0 pointer-events-none opacity-0 z-40"
        style={{
          top: "50%",
          transform: "translateY(-50%) rotate(-5deg)",
          transformOrigin: "right center",
          width: "100vw",
          height: "120px",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 10%, #FFD700 50%, rgba(255,255,255,0.3) 90%, transparent 100%)",
          boxShadow: "0 0 40px 10px rgba(255, 215, 0, 0.8)",
        }}
      />

      {/* Trigger Button - Top Left Corner */}
      <div className="fixed top-20 z-50 flex">
        <button
          onClick={triggerVictory}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600
                   hover:from-purple-500 hover:via-pink-500 hover:to-red-500
                   text-white rounded-lg font-bold text-sm
                   transition-all duration-300 
                   hover:scale-105 active:scale-95 
                   shadow-xl hover:shadow-pink-500/50
                   border border-white/20
                   relative overflow-hidden
                   group z-50"
        >
          <span className="z-10 flex items-center gap-2">
            <span className="text-lg">🏆</span>
            <span>TRIGGER</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        </button>

        {/* Reset Button - Top Left Corner (below trigger) */}
        {victoryTrigger > 0 && (
          <button
            onClick={() => setVictoryTrigger(0)}
            className="top-20 left-6 px-4 py-2 bg-gray-700 hover:bg-gray-600
                     text-white rounded-lg font-medium text-sm
                     transition-all duration-200 
                     hover:scale-105 active:scale-95 z-50
                     border border-gray-600"
          >
            Reset
          </button>
        )}
      </div>

      {/* Centered Victory Text */}
      {victoryTrigger > 0 && (
        <div className="victory-container flex gap-2 z-50">
          {victoryLetters.map((letter, index) => (
            <span
              key={index}
              className="victory-letter text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 drop-shadow-[0_0_30px_rgba(255,165,0,0.8)]"
              style={{
                WebkitTextStroke: "2px black",
                paintOrder: "stroke fill",
                textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default VictoryScene;
