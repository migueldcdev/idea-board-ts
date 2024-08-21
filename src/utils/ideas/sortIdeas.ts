import { Idea } from "../../types";

export type SortingOptions = "Date" | "AZ";

export function sortIdeas(value: SortingOptions, ideas: Idea[]) {
  switch (value) {
    case "Date":
      return ideas.sort((x, y) => y.timestamp - x.timestamp);

    case "AZ":
      return ideas.sort((x, y) => x.title.localeCompare(y.title));
  }
}
