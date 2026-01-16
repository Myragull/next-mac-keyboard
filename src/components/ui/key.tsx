import React from "react";
import { cn } from "@/lib/utils";

type KeyProps = {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  topLabel?: string;
  isActive?: boolean;
  onClick?: () => void;
  // Controls content positioning
  align?: "center" | "bottom-left" | "bottom-right" | "top-left" | "split" | "split-corners" | "split-left";
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
    <button type="button"
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={typeof children === 'string'? children : topLabel || "key"}
      className={cn(
        // 1. BASE SHAPE
        "relative py-0.5 h-12 flex rounded-md select-none cursor-pointer",
        "bg-[#0a090d] border border-[#707073]",
        "text-[#f9f9f9] text-[10px] font-light",


        // 2. ALIGNMENT LOGIC (Container Level)
        align === "center" && "items-center justify-center",
        align === "bottom-left" && "items-end justify-start p-1.5",
        align === "bottom-right" && "items-end justify-end p-1.5",
        align === "top-left" && "items-start justify-start p-1.5",
        
        // Split Wrappers (They handle their own internal spacing)
        (align === "split" || align === "split-corners" || align === "split-left") && "items-center justify-center",

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
      
      {/* CASE 1: DIAGONAL SPLIT (Top-Right Icon / Bottom-Left Text) */}
      {align === "split-corners" ? (
        <div className="flex flex-col justify-between h-full w-full p-1.5">
          {/* Icon: Self-End pushes it to the right */}
          <span className="self-end opacity-80 leading-none">{icon}</span>
          {/* Label: Self-Start pushes it to the left */}
          <span className="self-start text-[10px] leading-none font-light">{children}</span>
        </div>
      ) : 

      /* CASE 2: LEFT STACK (Top-Left Icon / Bottom-Left Text) */
      align === "split-left" ? (
        <div className="flex flex-col justify-between h-full w-full p-1.5">
          <span className="self-start opacity-80 leading-none">{icon}</span>
          <span className="self-start text-[10px] leading-none font-light">{children}</span>
        </div>
      ) :

      /* CASE 3: CENTER SPLIT (F-Row) */
      align === "split" ? (
        <div className="flex flex-col items-center justify-center gap-3 h-full w-full py-0.5">
          <span className="opacity-80">{icon}</span>
          <span className="text-[9px] leading-none font-bold opacity-70">{children}</span>
        </div>
      ) : topLabel ? (
        
      /* CASE 4: NUMBER KEYS */
        <div className="flex flex-col items-center justify-center gap-2 h-full pt-1">
          <span className="text-[10px] leading-none opacity-80">{topLabel}</span>
          <span className="text-[10px] leading-none">{children}</span>
        </div>
      ) : icon ? (
        
      /* CASE 5: ICON ONLY (Fallback) */
        <span className="flex items-center justify-center">{icon}</span>
      ) : (
        
      /* CASE 6: STANDARD TEXT */
        children
      )}
    </button>
  );
};