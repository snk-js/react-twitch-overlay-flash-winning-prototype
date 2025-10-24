"use client";

interface VictoryTextProps {
  visible: boolean;
}

export const VictoryText = ({ visible }: VictoryTextProps) => {
  if (!visible) return null;

  const victoryLetters = "VICTORY".split("");

  return (
    <div className="victory-container flex gap-0.5 z-50">
      {victoryLetters.map((letter, index) => (
        <span
          key={index}
          className="victory-letter text-8xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-green-300 to-yellow-200 drop-shadow-[0_10px_50px_rgba(255,165,0,0.8)]"
          style={{
            WebkitTextStroke: "2px black",
            paintOrder: "stroke fill",
            textShadow: "10px 10px 20px rgba(255, 215, 0, 0.5)",
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};
