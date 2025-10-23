"use client";

interface VictoryTextProps {
  visible: boolean;
}

export const VictoryText = ({ visible }: VictoryTextProps) => {
  if (!visible) return null;

  const victoryLetters = "VICTORY".split("");

  return (
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
  );
};
