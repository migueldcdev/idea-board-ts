export type Idea = {
    id: string,
    title: string,
    description: string,
    date: number,
    updated: boolean
}

export type Context = {
    ideas: Idea[],
    setIdeas: (ideas: Idea[]) => void;
  }