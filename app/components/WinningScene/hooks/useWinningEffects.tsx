"use client";

import { useFlashbangEffect } from "./useFlashBangEffect";
import { useGlitchEffect } from "./useGlitchEffect";
import { useConfettiEffect } from "./useConfettiEffect";

export const useVictoryEffects = (trigger: boolean) => {
  useFlashbangEffect(trigger);
  useGlitchEffect(trigger);
  useConfettiEffect(trigger);
};
