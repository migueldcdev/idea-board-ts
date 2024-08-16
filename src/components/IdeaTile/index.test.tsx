import { test, describe, expect, vi } from "vitest";
import { fireEvent, render, screen } from "../../utils/test-utils";

import { IdeaTile } from ".";

const idea = {
  id: "a8710270-9b41-4feb-bd7e-f91bd698cc5c",
  title: "apple",
  description: "",
  timestamp: 1723553451408,
  updated: true,
};

const context = {
  ideas: [idea],
  setIdeas: () => {},
  createIdea: () => {},
  deleteIdea: vi.fn(),
  updateIdea: () => {},
};

describe("IdeaTile component", () => {
  test("should render", async () => {
    render(<IdeaTile idea={idea} />, context);
    const tile = await screen.findAllByTestId("tile");

    expect(tile.length).toBe(1);
  });

  test("should handle deleteIdea function", () => {
    render(<IdeaTile idea={idea} />, context);
    const deleteButton = screen.getAllByText("x")[0];

    fireEvent.click(deleteButton);

    expect(context.deleteIdea).toHaveBeenCalled();
  });
  //this test does not pass
  test("update idea should be clickable", () => {
    render(<IdeaTile idea={idea} />, context);
    const updateButton = screen.getByTestId("update-button");

    fireEvent.click(updateButton);
  });
});
