"use client";

export const ExplosionRing = () => {
  return (
    <div
      className="explosion-ring fixed pointer-events-none opacity-0 z-35"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "8px solid #FFD700",
        boxShadow: `
          0 0 20px 5px rgba(255, 215, 0, 0.8),
          0 0 40px 10px rgba(255, 165, 0, 0.6),
          inset 0 0 20px rgba(255, 255, 255, 0.5)
        `,
      }}
    />
  );
};
