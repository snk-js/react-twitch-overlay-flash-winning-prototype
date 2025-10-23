"use client";

import { useState } from "react";
import { useVictoryEffects } from "./hooks/useWinningEffects";

const VictoryScene = () => {
  const [showVictory, setShowVictory] = useState(false);

  useVictoryEffects(showVictory);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <button
        onClick={() => setShowVictory(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Victory
      </button>

      {showVictory && (
        <div className="victory-text text-6xl font-bold absolute">
          🎉 VICTORY! 🎉
        </div>
      )}

      {/* Overlay for flashbang effect */}
      <div className="overlay fixed inset-0 pointer-events-none opacity-0 bg-white" />
    </div>
  );
};

export default VictoryScene;
