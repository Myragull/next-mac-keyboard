import React from "react";
import { cn } from "@/lib/utils";

type KeyProps = {
  className?: string;
  children?: React.ReactNode; // Made optional because we might pass icon instead
  icon?: React.ReactNode;     // <--- NEW PROP
  topLabel?: string;
  isActive?: boolean;
  onClick?: () => void;
  align?: "center" | "bottom-left" | "bottom-right" | "top-left"| "split" ;

};

export const Key = ({
  className,
  children,
  icon, // <--- Destructure new prop
  topLabel,
  isActive = false,
  onClick,
  align="center",
}: KeyProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        // 1. BASE SHAPE
        "relative h-12 flex items-center justify-center rounded-md select-none cursor-pointer",
        "bg-[#0a090d] border border-[#707073]",
        "text-[#f9f9f9] text-xs font-medium",

        // 2. HOVER (Only when not active)
        !isActive &&
          "hover:scale-[0.97] hover:shadow-[0px_8px_10px_-1px_rgba(39,39,42,0.9)]",

        // 3. RESTING SHADOW
        !isActive && "shadow-[0px_8px_10px_-1px_rgba(255,255,255,0.6)]",

        // 4. ANIMATION (Fixed duration to standard Tailwind value or arbitrary)
        "transition-all duration-300 ease-out",

        // 5. ACTIVE STATE (Deep Blue Glow)
        isActive &&
          "border-[#707073] shadow-[0px_0px_5px_4px_rgba(47,111,209,0.9),0px_0px_30px_1px_rgba(47,111,209,0.4)] z-10 -translate-y-[3px]",

        className
      )}
    >
      {/* LOGIC: 
          1. If topLabel exists -> Render Label + Children (Number keys)
          2. Else if Icon exists -> Render Icon (Backspace, Enter)
          3. Else -> Render Children (Letters) 
      */}
      {topLabel ? (
        <div className="flex flex-col items-center justify-center gap-[2px] h-full pt-1">
          <span className="text-[10px] leading-none text-[#f9f9f9]">
            {topLabel}
          </span>
          <span className="text-sm leading-none">{children}</span>
        </div>
      ) : icon ? (
        <span className="flex items-center justify-center">{icon}</span>
      ) : (
        children
      )}
    </div>
  );
};