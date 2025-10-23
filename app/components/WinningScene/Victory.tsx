"use client";

import { useState } from "react";
import { useDarkenEffect } from "./hooks/useDarkenEffect";
import { useLetterRevealEffect } from "./hooks/useLetterRevealEffect";
import { useFlashbangEffect } from "./hooks/useFlashBangEffect";
import { useGlitchEffect } from "./hooks/useGlitchEffect";
import { useLightningEffect } from "./hooks/useLightningEffect";
import { DarkOverlay } from "../DarkOverlay";
import { FlashOverlay } from "../FlashOverlay";
import { LightningStripe } from "../LightningStripe";
import { ControlButtons } from "../ControlButtons";
import { VictoryText } from "../VictoryText";

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

  const resetVictory = () => {
    setVictoryTrigger(0);
  };

  return (
    <div className="relative w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Effect Overlays */}
      <DarkOverlay />
      <FlashOverlay />
      <LightningStripe />

      {/* Control Buttons */}
      <ControlButtons
        onTrigger={triggerVictory}
        onReset={resetVictory}
        showReset={victoryTrigger > 0}
      />

      {/* Victory Text */}
      <VictoryText visible={victoryTrigger > 0} />
    </div>
  );
};

export default VictoryScene;
