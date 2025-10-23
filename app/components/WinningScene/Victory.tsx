"use client";

import { useState } from "react";
import {
  useConfettiEffect,
  useFlashbangEffect,
  useGlitchEffect,
} from "./hooks/useWinningEffects";

const VictoryScene = () => {
  const [triggerVictory, setTriggerVictory] = useState(false);

  useFlashbangEffect(triggerVictory);
  useGlitchEffect(triggerVictory);
  useConfettiEffect(triggerVictory);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <button
        onClick={() => setTriggerVictory(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Victory
      </button>

      {triggerVictory && (
        <div className="victory-text text-6xl font-bold absolute">
          🎉 VICTORY! 🎉
        </div>
      )}

      <div className="overlay fixed inset-0 pointer-events-none opacity-0" />
    </div>
  );
};

export default VictoryScene;
