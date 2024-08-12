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
  createIdea: () => void;
  deleteIdea: (id: string) => void;
  updateIdea: (id: string, input: Input) => void;
};

export type Input = {
  title: string;
  description: string;
};
