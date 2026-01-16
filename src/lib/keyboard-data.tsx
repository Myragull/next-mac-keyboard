// src/lib/keyboard-data.tsx
import { SunDim,Sun,LayoutGrid,Search,Mic,Moon,Rewind,Play,FastForward,VolumeX,Volume1,Volume2, Delete } from "lucide-react";
import React from "react";

// Define a type for safety
export type KeyData = {
  label: string;
  w?: string;
  top?: string;
  icon?: React.ReactNode;
  align?: "center" | "bottom-left" | "bottom-right" | "top-left"| "split" ;
  className?:string;

};

export const keyboardRows: KeyData[][] = [
  // ROW 1 (Function Row)
  [
    { label: "esc", w: "w-20" ,  align:"bottom-left"},
    { label: "F1", w: "w-12",align:"split" ,icon:<SunDim size={10} /> },
    { label: "F2", w: "w-12",align:"split" ,icon:<Sun size={10} /> },
    { label: "F3", w: "w-12",align:"split" ,icon:<LayoutGrid size={10} /> },
    { label: "F4", w: "w-12",align:"split" ,icon:<Search size={10} /> },
    { label: "F5", w: "w-12",align:"split" ,icon:<Mic size={10} /> },
    { label: "F6", w: "w-12",align:"split" ,icon:<Moon size={10} /> },
    { label: "F7", w: "w-12",align:"split" ,icon:<Rewind size={10} /> },
    { label: "F8", w: "w-12",align:"split" ,icon:<Play size={10} /> },
    { label: "F9", w: "w-12",align:"split" ,icon:<FastForward size={10} /> },
    { label: "F10", w: "w-12",align:"split" ,icon:<VolumeX size={10} /> },
    { label: "F11", w: "w-12",align:"split" ,icon:<Volume1 size={10} /> },
    { label: "F12", w: "w-12",align:"split" ,icon:<Volume2 size={10} /> },
    { label: "Del", w: "w-12",align:"bottom-right" ,icon:<Delete size={10} /> },
  ],
  // ROW 2 (Numbers)
  [
    { label: "`", top:"~", w: "w-12" },
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
    { label: "Delete",align:"bottom-right", w: "w-20" }, 
  ],
  // ROW 3 (QWERTY)
  [
    { label: "tab", w: "w-20" , align:"bottom-left" },
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
    { label: "caps lock", w: "w-24", align:"bottom-left" },
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
    { label: "return", w: "w-[5.5rem]", align:"bottom-right" }, 
  ],
  // ROW 5 (ZXCV)
  [
    { label: "Shift", w: "w-30", align:"bottom-left"},
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
    { label: "shift", w: "w-30", align:"bottom-right" },
  ],
];