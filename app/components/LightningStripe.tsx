"use client";

export const LightningStripe = () => {
  return (
    <div
      className="lightning-stripe fixed left-0 pointer-events-none opacity-0 z-40"
      style={{
        top: "45%",
        transform: "translateY(-50%) rotate(-5deg)",
        transformOrigin: "right center",
        width: "100vw",
        height: "30px",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.9) 10%, #FF0 50%, rgba(255,255,255) 60%, transparent 100%)",
        boxShadow: "30px 10px 400px 20px rgba(255, 255, 0, 0.5)",
      }}
    />
  );
};
