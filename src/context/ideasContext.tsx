import React, { createContext, useState, useEffect } from "react";

import { Context, Idea } from "../types";


export const ideasContext = createContext<Context | null>(null);

const IdeasContext = ({ children }: { children: React.ReactNode }) => {
  const [ideas, setIdeas] = useState<Idea[]>(() => {
    return JSON.parse(localStorage.getItem("ideas")!) || [];
  });

  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  return (
    <ideasContext.Provider value={{ ideas, setIdeas }}>
      {children}
    </ideasContext.Provider>
  );
};

export default IdeasContext;
