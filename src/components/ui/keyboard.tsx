"use client";
import React from "react";
import { Key } from "./key";
import { useKeyboard } from "@/hooks/useKeyboard";
import { keyboardRows } from "@/lib/keyboard-data";
import { Command, ChevronUp, ChevronDown, ChevronLeft, ChevronRight , Globe, Option, icons} from "lucide-react";

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
              className={`${keyItem.w || "w-12"} ${keyItem.className || ""}`}
              topLabel={keyItem.top}
              icon={keyItem.icon} 
              align={keyItem.align}
              isActive={activeKey === keyItem.label}
              onClick={() => handleKeyClick(keyItem.label)}
            >
              {keyItem.label}
            </Key>
          ))}
        </div>
      ))}



       {/* // row 6 */}
      {/* MANUAL BOTTOM ROW (Arrows) */}
      <div className="flex flex-row gap-1.5 justify-center">
        {/* Left Controls */} 
        <Key className="w-12" align="split-corners" onClick={() => handleKeyClick("Ctrl")} isActive={activeKey === "fn"} icon={<Globe size={10}/>}>fn</Key>
        <Key className="w-12" align="split-corners" onClick={() => handleKeyClick("Ctrl")} isActive={activeKey === "Ctrl" } icon={<ChevronUp size={10}/>}>control</Key>
        <Key className="w-12" align="split-corners" onClick={() => handleKeyClick("Opt")} isActive={activeKey === "Opt"} icon={<Option size={10}/>}>option</Key>

        
        {/* Cmd (Icon) */}
        <Key className="w-16" align="split-corners"  onClick={() => handleKeyClick("Cmd")} isActive={activeKey === "Cmd"} icon={<Command size={10}/>}>command</Key>
        
        {/* Space */}
        <Key className="w-68" onClick={() => handleKeyClick("Space")} isActive={activeKey === "Space"} />

        {/* Cmd Right (Icon) */}
        <Key className="w-16" align="split-left" onClick={() => handleKeyClick("CmdR")} isActive={activeKey === "CmdR"} icon={<Command size={10}/>}>command</Key>
        
        <Key className="w-12" align="split-left" onClick={() => handleKeyClick("OptR")} isActive={activeKey === "OptR"} icon={<Option size={10}/>}>option</Key>

        {/* Arrows Container */}
        <div className="flex gap-1 items-end">
          <Key className="w-12 h-5.5" onClick={() => handleKeyClick("Left")} isActive={activeKey === "Left"} icon={<ChevronLeft size={14} />} />

          <div className="flex flex-col gap-1 h-12 justify-between">
            <Key className="w-12 " onClick={() => handleKeyClick("Up")} isActive={activeKey === "Up"} icon={<ChevronUp size={14} />} />
            <Key className="w-12 " onClick={() => handleKeyClick("Down")} isActive={activeKey === "Down"} icon={<ChevronDown size={14} />} />
          </div>

          <Key className="w-12 h-5.5" onClick={() => handleKeyClick("Right")} isActive={activeKey === "Right"} icon={<ChevronRight size={16} />} />
        </div>
      </div>
    </div>
  );
};