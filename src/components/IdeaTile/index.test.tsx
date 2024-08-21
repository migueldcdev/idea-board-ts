import { test, describe, expect, vi } from "vitest";
import { render, screen } from "../../utils/test-utils";
import { userEvent } from "@testing-library/user-event";
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
  deleteIdea: () => {},
  updateIdea: () => {},
};

describe("IdeaTile component", () => {
  test("should render", async () => {
    render(<IdeaTile idea={idea} />, context);
    const tile = await screen.findAllByRole("article");

    expect(tile.length).toBe(1);
  });

  test("should handle deleteIdea function", async () => {

    const deleteIdea = vi.fn();

    render(<IdeaTile idea={idea} />, {...context, deleteIdea});
    const deleteButton = screen.getByText("x");

    await userEvent.click(deleteButton);

    expect(deleteIdea).toHaveBeenCalled();
  });
  
  test("update idea should be clickable", async () => {
    render(<IdeaTile idea={idea} />, context);
    const updateButton = screen.getByText("Update");

    await userEvent.click(updateButton);
  });
});
