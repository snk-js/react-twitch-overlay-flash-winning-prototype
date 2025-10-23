"use client";

import { useState } from "react";
import { useFlashbangEffect } from "./hooks/useFlashBangEffect";
import { useGlitchEffect } from "./hooks/useGlitchEffect";
import { useConfettiEffect } from "./hooks/useConfettiEffect";

const EFFECTS = [
  {
    id: "flashbang",
    label: "Flashbang",
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "glitch",
    label: "Glitch",
    icon: "📺",
    color: "from-green-500 to-cyan-500",
  },
  {
    id: "confetti",
    label: "Confetti",
    icon: "🎉",
    color: "from-pink-500 to-purple-500",
  },
] as const;

type EffectId = (typeof EFFECTS)[number]["id"];

const VictoryScene = () => {
  const [effectTriggers, setEffectTriggers] = useState({
    flashbang: 0,
    glitch: 0,
    confetti: 0,
  });

  useFlashbangEffect(effectTriggers.flashbang);
  useGlitchEffect(effectTriggers.glitch);
  useConfettiEffect(effectTriggers.confetti);

  const triggerEffect = (effect: EffectId) => {
    setEffectTriggers((prev) => ({
      ...prev,
      [effect]: prev[effect] + 1,
    }));
  };

  const triggerAll = () => {
    setEffectTriggers((prev) => ({
      flashbang: prev.flashbang + 1,
      glitch: prev.glitch + 1,
      confetti: prev.confetti + 1,
    }));
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-6 bg-gray-900 p-8">
      {/* Individual Effects */}
      <div className="flex flex-wrap gap-3 justify-center">
        {EFFECTS.map((effect) => (
          <button
            key={effect.id}
            onClick={() => triggerEffect(effect.id)}
            className={`px-5 py-2.5 bg-gradient-to-r ${effect.color} 
                       text-white rounded-lg font-medium
                       transition-all duration-200 
                       hover:scale-105 active:scale-95 
                       shadow-md hover:shadow-lg
                       flex items-center gap-2`}
          >
            <span className="text-xl">{effect.icon}</span>
            <span>{effect.label}</span>
          </button>
        ))}
      </div>

      {/* Trigger All */}
      <button
        onClick={triggerAll}
        className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600
                 hover:from-purple-500 hover:via-pink-500 hover:to-red-500
                 text-white rounded-xl font-bold text-lg
                 transition-all duration-200 
                 hover:scale-105 active:scale-95 
                 shadow-xl hover:shadow-2xl
                 animate-pulse"
      >
        🎊 ALL EFFECTS 🎊
      </button>

      {/* Victory Text */}
      {Object.values(effectTriggers).some((v) => v > 0) && (
        <div className="victory-text text-6xl font-bold text-white drop-shadow-lg">
          🎉 VICTORY! 🎉
        </div>
      )}

      <div className="overlay fixed inset-0 pointer-events-none opacity-0 z-50" />
    </div>
  );
};

export default VictoryScene;
