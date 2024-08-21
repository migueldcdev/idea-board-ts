import { Idea } from "../../types";

export type SortingOptions = "Newest" | "Oldest" | "AZ" | "ZA";

export function sortIdeas(value: SortingOptions, ideas: Idea[]) {
  switch (value) {
    case "Newest":
      return ideas.sort((x, y) => y.timestamp - x.timestamp);

    case "Oldest":
      return ideas.sort((x, y) => x.timestamp - y.timestamp);

    case "AZ":
      return ideas.sort((x, y) => x.title.localeCompare(y.title));

    case "ZA":
      return ideas.sort((x, y) => y.title.localeCompare(x.title));
  }
}
