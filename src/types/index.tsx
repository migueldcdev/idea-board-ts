export type Idea = {
  id: string;
  title: string;
  description: string;
  timestamp: number;
  updated: boolean;
};

export type Context = {
  ideas: Idea[];
  setIdeas: (ideas: Idea[]) => void;
};
