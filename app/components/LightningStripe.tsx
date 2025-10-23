"use client";

export const LightningStripe = () => {
  return (
    <div
      className="lightning-stripe fixed left-0 pointer-events-none opacity-0 z-40"
      style={{
        top: "50%",
        transform: "translateY(-50%) rotate(-5deg)",
        transformOrigin: "right center",
        width: "100vw",
        height: "120px",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 10%, #FFD700 50%, rgba(255,255,255,0.3) 90%, transparent 100%)",
        boxShadow: "0 0 40px 10px rgba(255, 215, 0, 0.8)",
      }}
    />
  );
};
