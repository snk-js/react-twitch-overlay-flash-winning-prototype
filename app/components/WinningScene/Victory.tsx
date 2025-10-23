"use client";

import { useState } from "react";
import { useDarkenEffect } from "./hooks/useDarkenEffect";
import { useLetterRevealEffect } from "./hooks/useLetterRevealEffect";
import { useFlashbangEffect } from "./hooks/useFlashBangEffect";
import { useGlitchEffect } from "./hooks/useGlitchEffect";
import { useConfettiEffect } from "./hooks/useConfettiEffect";

const VictoryScene = () => {
  const [victoryTrigger, setVictoryTrigger] = useState(0);

  // All effects use the same trigger but with different delays
  useDarkenEffect(victoryTrigger, 0); // Starts immediately
  useLetterRevealEffect(victoryTrigger, 0.6); // After 0.3s
  useFlashbangEffect(victoryTrigger, 0.9); // After 0.3s (with letters)
  useGlitchEffect(victoryTrigger, 2); // After 1s
  useConfettiEffect(victoryTrigger, 1.5); // After 1s (in ms)

  const triggerVictory = () => {
    setVictoryTrigger((prev) => prev + 1);
  };

  const victoryLetters = "VICTORY".split("");

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-8 bg-gray-900 relative overflow-hidden">
      {/* Dark Overlay */}
      <div className="dark-overlay fixed inset-0 bg-black opacity-0 pointer-events-none z-10" />

      {/* Flash Overlay */}
      <div className="flash-overlay fixed inset-0 opacity-0 pointer-events-none z-20" />

      {/* Victory Text Container */}
      {victoryTrigger > 0 && (
        <div className="victory-container flex gap-2 z-30">
          {victoryLetters.map((letter, index) => (
            <span
              key={index}
              className="victory-letter text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 drop-shadow-[0_0_30px_rgba(255,165,0,0.8)] opacity-0"
              style={{
                textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={triggerVictory}
        className="px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600
                   hover:from-purple-500 hover:via-pink-500 hover:to-red-500
                   text-white rounded-2xl font-black text-2xl
                   transition-all duration-300 
                   hover:scale-110 active:scale-95 
                   shadow-2xl hover:shadow-pink-500/50
                   border-2 border-white/20
                   relative overflow-hidden
                   group
                   z-30"
      >
        <span className="relative z-10 flex items-center gap-3">
          <span className="text-3xl">🏆</span>
          <span>TRIGGER VICTORY</span>
          <span className="text-3xl">🏆</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      </button>

      {/* Reset Button */}
      {victoryTrigger > 0 && (
        <button
          onClick={() => setVictoryTrigger(0)}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600
                     text-white rounded-lg font-medium
                     transition-all duration-200 
                     hover:scale-105 active:scale-95
                     z-30"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default VictoryScene;
