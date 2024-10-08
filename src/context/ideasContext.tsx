import React, { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Context, Idea, Input } from "../types";

export const ideasContext = createContext<Context | null>(null);

export const IdeasContext = ({ children }: { children: React.ReactNode }) => {
  const [ideas, setIdeas] = useState<Idea[]>(() => {
    const storedIdeas = localStorage.getItem("ideas");

    const sortedIdeas = storedIdeas ? JSON.parse(storedIdeas) : [];

    return sortedIdeas;
  });

  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  const idea = {
    id: uuidv4(),
    title: "",
    description: "",
    timestamp: Date.now(),
    updated: false,
  };

  function createIdea() {
    setIdeas([...ideas, idea]);
  }

  function deleteIdea(id: string) {
    const result = ideas.filter((idea: Idea) => idea.id !== id);

    setIdeas(result);
  }

  function updateIdea(id: string, input: Input) {
    const updatedIdeas = ideas.map((idea) => {
      if (idea.id === id) {
        idea = {
          ...idea,
          title: input.title,
          description: input.description,
          timestamp: Date.now(),
          updated: true,
        };
      }
      return idea;
    });

    setIdeas(updatedIdeas);
  }

  return (
    <ideasContext.Provider
      value={{ ideas, setIdeas, createIdea, deleteIdea, updateIdea }}
    >
      {children}
    </ideasContext.Provider>
  );
};

// reduces imports and using "as Context" type everytime we use the context
export const useIdeasContext = () => {
  const context = useContext(ideasContext);
  if (!context) {
    throw new Error("useIdeaContext must be used within a user provider");
  }

  return context;
};
