// src/lib/keyboard-data.tsx
import { CornerDownLeft, Delete } from "lucide-react";
import React from "react";

// Define a type for safety
export type KeyData = {
  label: string;
  w?: string;
  top?: string;
  icon?: React.ReactNode;
};

export const keyboardRows: KeyData[][] = [
  // ROW 1 (Function Row)
  [
    { label: "Esc", w: "w-20" },
    { label: "F1", w: "w-12" },
    { label: "F2", w: "w-12" },
    { label: "F3", w: "w-12" },
    { label: "F4", w: "w-12" },
    { label: "F5", w: "w-12" },
    { label: "F6", w: "w-12" },
    { label: "F7", w: "w-12" },
    { label: "F8", w: "w-12" },
    { label: "F9", w: "w-12" },
    { label: "F10", w: "w-12" },
    { label: "F11", w: "w-12" },
    { label: "F12", w: "w-12" },
    { label: "Del", w: "w-12" },
  ],
  // ROW 2 (Numbers)
  [
    { label: "`", w: "w-12" },
    { label: "1", top: "!", w: "w-12" },
    { label: "2", top: "@", w: "w-12" },
    { label: "3", top: "#", w: "w-12" },
    { label: "4", top: "$", w: "w-12" },
    { label: "5", top: "%", w: "w-12" },
    { label: "6", top: "^", w: "w-12" },
    { label: "7", top: "&", w: "w-12" },
    { label: "8", top: "*", w: "w-12" },
    { label: "9", top: "(", w: "w-12" },
    { label: "0", top: ")", w: "w-12" },
    { label: "-", top: "_", w: "w-12" },
    { label: "=", top: "+", w: "w-12" },
    // FIXED HERE:
    { label: "Delete", w: "w-20", icon: <Delete size={20} /> }, 
  ],
  // ROW 3 (QWERTY)
  [
    { label: "Tab", w: "w-20" },
    { label: "Q", w: "w-12" },
    { label: "W", w: "w-12" },
    { label: "E", w: "w-12" },
    { label: "R", w: "w-12" },
    { label: "T", w: "w-12" },
    { label: "Y", w: "w-12" },
    { label: "U", w: "w-12" },
    { label: "I", w: "w-12" },
    { label: "O", w: "w-12" },
    { label: "P", w: "w-12" },
    { label: "[", top: "{", w: "w-12" },
    { label: "]", top: "}", w: "w-12" },
    { label: "\\", top: "|", w: "w-12" },
  ],
  // ROW 4 (ASDF)
  [
    { label: "Caps", w: "w-24" },
    { label: "A", w: "w-12" },
    { label: "S", w: "w-12" },
    { label: "D", w: "w-12" },
    { label: "F", w: "w-12" },
    { label: "G", w: "w-12" },
    { label: "H", w: "w-12" },
    { label: "J", w: "w-12" },
    { label: "K", w: "w-12" },
    { label: "L", w: "w-12" },
    { label: ";", top: ":", w: "w-12" },
    { label: "'", top: '"', w: "w-12" },
    { label: "Enter", w: "w-[5.5rem]", icon: <CornerDownLeft size={16}/> }, 
  ],
  // ROW 5 (ZXCV)
  [
    { label: "Shift", w: "w-30" },
    { label: "Z", w: "w-12" },
    { label: "X", w: "w-12" },
    { label: "C", w: "w-12" },
    { label: "V", w: "w-12" },
    { label: "B", w: "w-12" },
    { label: "N", w: "w-12" },
    { label: "M", w: "w-12" },
    { label: ",", top: "<", w: "w-12" },
    { label: ".", top: ">", w: "w-12" },
    { label: "/", top: "?", w: "w-12" },
    { label: "Shift", w: "w-30" },
  ],
];