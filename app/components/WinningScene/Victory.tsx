"use client";

import { useState } from "react";
import { useDarkenEffect } from "./hooks/useDarkenEffect";
import { useLetterRevealEffect } from "./hooks/useLetterRevealEffect";
import { useFlashbangEffect } from "./hooks/useFlashBangEffect";
import { useGlitchEffect } from "./hooks/useGlitchEffect";
import { useLightningEffect } from "./hooks/useLightningEffect";
import { useExplosionEffect } from "./hooks/useExplosionEffect";
import { DarkOverlay } from "../DarkOverlay";
import { FlashOverlay } from "../FlashOverlay";
import { LightningStripe } from "../LightningStripe";
import { ExplosionRing } from "../ExplosionRing";
import { ControlButtons } from "../ControlButtons";
import { VictoryText } from "../VictoryText";

const VictoryScene = () => {
  const [victoryTrigger, setVictoryTrigger] = useState(0);

  useDarkenEffect(victoryTrigger, 0);
  useLightningEffect(victoryTrigger, 0);
  useExplosionEffect(victoryTrigger, 0.3);
  useLetterRevealEffect(victoryTrigger, 0.4);
  useFlashbangEffect(victoryTrigger, 0.42);
  useGlitchEffect(victoryTrigger, 0.6);

  const triggerVictory = () => {
    setVictoryTrigger((prev) => prev + 1);
  };

  const resetVictory = () => {
    setVictoryTrigger(0);
  };

  return (
    <div className="relative w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden">
      <DarkOverlay />
      <FlashOverlay />
      <LightningStripe />
      <ExplosionRing />

      <ControlButtons
        onTrigger={triggerVictory}
        onReset={resetVictory}
        showReset={victoryTrigger > 0}
      />

      <VictoryText visible={victoryTrigger > 0} />
    </div>
  );
};

export default VictoryScene;
