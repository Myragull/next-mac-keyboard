"use client";
import React from "react";
import { Key } from "./key";
import { useKeyboard } from "@/hooks/useKeyboard";
import { keyboardRows } from "@/lib/keyboard-data";
import { Command, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export const Keyboard = () => {
  const { activeKey, handleKeyClick } = useKeyboard();

  return (
    <div className="flex flex-col gap-1 px-2 py-2.5 bg-[#27272a] rounded-xl border border-[#27272a] shadow-2xl">
      {/* AUTOMATIC ROWS (1-5) */}
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row gap-1.5 justify-center">
          {row.map((keyItem, keyIndex) => (
            <Key
              key={`${rowIndex}-${keyIndex}`}
              className={keyItem.w || "w-12"}
              topLabel={keyItem.top}
              // --- PASS THE ICON PROP EXPLICITLY ---
              icon={keyItem.icon} 
              isActive={activeKey === keyItem.label}
              onClick={() => handleKeyClick(keyItem.label)}
            >
              {/* Only pass text as children if there is no icon */}
              {!keyItem.icon && keyItem.label}
            </Key>
          ))}
        </div>
      ))}




      {/* MANUAL BOTTOM ROW (Arrows) */}
      <div className="flex flex-row gap-1.5 justify-center">
        {/* Left Controls */} 
        <Key className="w-12" onClick={() => handleKeyClick("Ctrl")} isActive={activeKey === "Ctrl"}>fn</Key>
        <Key className="w-12" onClick={() => handleKeyClick("Ctrl")} isActive={activeKey === "Ctrl"}>Ctrl</Key>
        <Key className="w-12" onClick={() => handleKeyClick("Opt")} isActive={activeKey === "Opt"}>Opt</Key>
        
        {/* Cmd (Icon) */}
        <Key className="w-16" onClick={() => handleKeyClick("Cmd")} isActive={activeKey === "Cmd"} icon={<Command size={16}/>} />
        
        {/* Space */}
        <Key className="w-68" onClick={() => handleKeyClick("Space")} isActive={activeKey === "Space"} />

        {/* Cmd Right (Icon) */}
        <Key className="w-16" onClick={() => handleKeyClick("CmdR")} isActive={activeKey === "CmdR"} icon={<Command size={16}/>} />
        
        <Key className="w-12" onClick={() => handleKeyClick("OptR")} isActive={activeKey === "OptR"}>Opt</Key>

        {/* Arrows Container */}
        <div className="flex gap-1 items-end">
          <Key className="w-12 h-6" onClick={() => handleKeyClick("Left")} isActive={activeKey === "Left"} icon={<ChevronLeft size={14} />} />

          <div className="flex flex-col gap-1 h-12 justify-between">
            <Key className="w-12 " onClick={() => handleKeyClick("Up")} isActive={activeKey === "Up"} icon={<ChevronUp size={14} />} />
            <Key className="w-12 " onClick={() => handleKeyClick("Down")} isActive={activeKey === "Down"} icon={<ChevronDown size={14} />} />
          </div>

          <Key className="w-12 h-6" onClick={() => handleKeyClick("Right")} isActive={activeKey === "Right"} icon={<ChevronRight size={16} />} />
        </div>
      </div>
    </div>
  );
};