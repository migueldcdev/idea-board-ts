import { test, describe, expect } from "vitest";
import { render, screen } from "../../utils/test-utils";

import { IdeasContainer } from ".";

const ideas = [
  {
    id: "a8710270-9b41-4feb-bd7e-f91bd698cc5c",
    title: "apple",
    description: "",
    timestamp: 1723553451408,
    updated: true,
  },
  {
    id: "8e3cf683-3068-4aaa-aee3-0d3c76805633",
    title: "banana",
    description: "",
    timestamp: 1723553455560,
    updated: true,
  },
  {
    id: "2df93c32-83d5-4ad1-93e0-eba6600fdd02",
    title: "carrot",
    description: "",
    timestamp: 1723553459039,
    updated: true,
  },
];

const context = {
  ideas: ideas,
  setIdeas: () => {},
  createIdea: () => {},
  deleteIdea: () => {},
  updateIdea: () => {},
};

describe("IdeasContainer component", () => {
  test("should render idea tiles", () => {
    render(<IdeasContainer />, context);
    const ideaTiles = screen.getAllByRole("article");
    expect(ideaTiles.length).toBe(3);
  });
  
});
