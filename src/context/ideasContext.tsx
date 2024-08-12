import React, { createContext, useState, useEffect } from "react";

import { Context, Idea } from "../types";

export const ideasContext = createContext<Context | null>(null);

export const IdeasContext = ({ children }: { children: React.ReactNode }) => {
  const [ideas, setIdeas] = useState<Idea[]>(() => {
    const storedIdeas = localStorage.getItem("ideas");
    return storedIdeas ? JSON.parse(localStorage.getItem("ideas")!) : [];
  });

  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  function deleteIdea(id: string) {
    const result = ideas.filter((idea: Idea) => idea.id !== id);

    setIdeas(result);
  }

  return (
    <ideasContext.Provider value={{ ideas, setIdeas, deleteIdea }}>
      {children}
    </ideasContext.Provider>
  );
};
