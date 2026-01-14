"use client";
import { useState } from "react";

export function useKeyboard() {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleKeyClick = (keyName: string) => {
    setActiveKey(activeKey === keyName ? null : keyName);
  };

  return {
    activeKey,
    handleKeyClick,
  };
}