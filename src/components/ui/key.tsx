import React from "react";
import { cn } from "@/lib/utils";

type KeyProps = {
  className?: string;
  children?: React.ReactNode; // Text label (e.g. "A", "F1", "Esc")
  icon?: React.ReactNode;     // Icon component (e.g. <Sun />)
  topLabel?: string;          // Secondary top label (e.g. "!" on "1")
  isActive?: boolean;         // Pressed state
  onClick?: () => void;
  // Controls content positioning
  align?: "center" | "bottom-left" | "bottom-right" | "top-left" | "split";
};

export const Key = ({
  className,
  children,
  icon,
  topLabel,
  isActive = false,
  onClick,
  align = "center",
}: KeyProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        // 1. BASE SHAPE
        "relative py-0.5 h-12 flex rounded-md select-none cursor-pointer",
        "bg-[#0a090d] border border-[#707073]",
        "text-[#f9f9f9] text-xs font-medium",

        // 2. ALIGNMENT LOGIC (Controls where content sits in the box)
        align === "center" && "items-center justify-center",
        align === "bottom-left" && "items-end justify-start p-1.5",
        align === "bottom-right" && "items-end justify-end p-1.5",
        align === "top-left" && "items-start justify-start p-1.5",
        align === "split" && "items-center justify-center", // Wrapper handles internal spacing

        // 3. HOVER (Only when not active)
        !isActive &&
          "hover:scale-[0.97] hover:shadow-[0px_8px_10px_-1px_rgba(39,39,42,0.9)]",

        // 4. RESTING SHADOW
        !isActive && "shadow-[0px_8px_10px_-1px_rgba(255,255,255,0.6)]",

        // 5. ANIMATION
        "transition-all duration-300 ease-out",

        // 6. ACTIVE STATE (Deep Blue Glow)
        isActive &&
          "border-[#707073] shadow-[0px_0px_5px_4px_rgba(29,78,216,0.9),0px_0px_30px_1px_rgba(29,78,216,0.5)] z-10 -translate-y-[3px]",

        className
      )}
    >
      {/* --- RENDER LOGIC --- */}
      
      {/* CASE 1: SPLIT KEYS (F-Row) -> Icon Top, Label Bottom */}
      {align === "split" ? (
        <div className="flex flex-col items-center justify-between h-full w-full py-1">
          <span className="opacity-80">{icon}</span>
          <span className="text-[10px] leading-none font-bold">{children}</span>
        </div>
      ) : topLabel ? (
        
      /* CASE 2: NUMBER KEYS -> Symbol Top, Number Bottom */
        <div className="flex flex-col items-center  justify-center gap-2 h-full pt-1">
          <span className="text-[10px] leading-none opacity-80">{topLabel}</span>
          <span className="text-sm leading-none">{children}</span>
        </div>
      ) : icon ? (
        
      /* CASE 3: ICON ONLY -> Centered Icon */
        <span className="flex items-center justify-center">{icon}</span>
      ) : (
        
      /* CASE 4: STANDARD TEXT -> Just Children */
        children
      )}
    </div>
  );
};