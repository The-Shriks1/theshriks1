"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type RuntimeState = "dormant" | "prewarming" | "active" | "cooldown";

interface CinematicRuntimeContextType {
  activeSection: string | null;
  documentHidden: boolean;
  registerSection: (id: string, state: RuntimeState) => void;
  getSectionState: (id: string) => RuntimeState;
}

const CinematicRuntimeContext = createContext<CinematicRuntimeContextType | null>(null);

export function CinematicRuntimeProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [documentHidden, setDocumentHidden] = useState(false);
  const [sectionStates, setSectionStates] = useState<Record<string, RuntimeState>>({});

  useEffect(() => {
    const handleVisibilityChange = () => {
      setDocumentHidden(document.visibilityState === "hidden");
    };

    const handleSectionActive = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveSection(customEvent.detail);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("section:active", handleSectionActive);

    // Initial check
    handleVisibilityChange();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("section:active", handleSectionActive);
    };
  }, []);

  const registerSection = (id: string, state: RuntimeState) => {
    setSectionStates((prev) => {
      if (prev[id] === state) return prev;
      return { ...prev, [id]: state };
    });
  };

  const getSectionState = (id: string) => {
    if (documentHidden) return "dormant";
    if (activeSection === id) return "active";
    // For now, simple logic: if it's not active, it's dormant.
    // Prewarming/Cooldown logic can be expanded based on intersection ratios if needed.
    return "dormant";
  };

  return (
    <CinematicRuntimeContext.Provider value={{ activeSection, documentHidden, registerSection, getSectionState }}>
      {children}
    </CinematicRuntimeContext.Provider>
  );
}

export function useCinematicRuntime() {
  const context = useContext(CinematicRuntimeContext);
  if (!context) {
    throw new Error("useCinematicRuntime must be used within a CinematicRuntimeProvider");
  }
  return context;
}
