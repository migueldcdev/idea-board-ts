import { createContext, useState, useEffect } from "react";

export const ideasContext = createContext();

const IdeasContext = ({ children }) => {
  const [ideas, setIdeas] = useState(() => {
    return JSON.parse(localStorage.getItem("ideas")) || [];
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
