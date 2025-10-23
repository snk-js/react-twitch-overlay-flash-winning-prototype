"use client";

interface ControlButtonsProps {
  onTrigger: () => void;
  onReset: () => void;
  showReset: boolean;
}

export const ControlButtons = ({
  onTrigger,
  onReset,
  showReset,
}: ControlButtonsProps) => {
  return (
    <div className="fixed top-6 left-6 z-50 flex flex-col gap-3">
      {/* Trigger Button */}
      <button
        onClick={onTrigger}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600
                   hover:from-purple-500 hover:via-pink-500 hover:to-red-500
                   text-white rounded-lg font-bold text-sm
                   transition-all duration-300 
                   hover:scale-105 active:scale-95 
                   shadow-xl hover:shadow-pink-500/50
                   border border-white/20
                   relative overflow-hidden
                   group"
      >
        <span className="relative z-10 flex items-center gap-2">
          <span className="text-lg">🏆</span>
          <span>TRIGGER</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      </button>

      {/* Reset Button */}
      {showReset && (
        <button
          onClick={onReset}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600
                     text-white rounded-lg font-medium text-sm
                     transition-all duration-200 
                     hover:scale-105 active:scale-95
                     border border-gray-600"
        >
          Reset
        </button>
      )}
    </div>
  );
};
