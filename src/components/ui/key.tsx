import React from "react";
import { cn } from "@/lib/utils";

type KeyProps = {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  topLabel?: string;
  isActive?: boolean;
  onClick?: () => void;
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
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={typeof children === "string" ? children : topLabel || "key"}
      className={cn(
        // 1. BASE SHAPE & COLORS
        "relative py-0.5 h-12 flex rounded-lg select-none cursor-pointer",
        "bg-key-bg border border-key-border text-key-text",
        "text-[10px] font-light",

        // 2. ALIGNMENT LOGIC
        align === "center" && "items-center justify-center",
        align === "bottom-left" && "items-end justify-start p-1.5",
        align === "bottom-right" && "items-end justify-end p-1.5",
        align === "top-left" && "items-start justify-start p-1.5",
        (align === "split" || align === "split-corners" || align === "split-left") &&
          "items-center justify-center",

        // 3. HOVER (Only when not active)
        !isActive && "hover:scale-[0.97] hover:shadow-key-hover",

        // 4. RESTING SHADOW
        !isActive && "shadow-key-resting",

        // 5. ANIMATION
        "transition-all duration-300 ease-out",

        // 6. ACTIVE STATE (Deep Blue Glow)
        isActive &&
          "border-key-border shadow-key-active z-10 -translate-y-[3px]",

        // 7. FOCUS (Accessibility)
        "focus:outline-none focus:ring-2 focus:ring-glow-blue/50",

        className
      )}
    >
      {align === "split-corners" ? (
        <div className="flex flex-col justify-between h-full w-full p-1.5 pointer-events-none">
          <span className="self-end opacity-80 leading-none">{icon}</span>
          <span className="self-start text-[10px] leading-none font-light">{children}</span>
        </div>
      ) : align === "split-left" ? (
        <div className="flex flex-col justify-between h-full w-full p-1.5 pointer-events-none">
          <span className="self-start opacity-80 leading-none">{icon}</span>
          <span className="self-start text-[10px] leading-none font-light">{children}</span>
        </div>
      ) : align === "split" ? (
        <div className="flex flex-col items-center justify-between h-full w-full py-1.5 pointer-events-none">
          <span className="opacity-80">{icon}</span>
          <span className="text-[9px] leading-none font-bold opacity-70">{children}</span>
        </div>
      ) : topLabel ? (
        <div className="flex flex-col items-center justify-center gap-2 h-full pt-1 pointer-events-none">
          <span className="text-[10px] leading-none opacity-80">{topLabel}</span>
          <span className="text-[10px] leading-none">{children}</span>
        </div>
      ) : icon ? (
        <span className="flex items-center justify-center pointer-events-none">{icon}</span>
      ) : (
        children
      )}
    </button>
  );
};
