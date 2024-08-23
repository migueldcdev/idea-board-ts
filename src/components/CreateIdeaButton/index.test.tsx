import { userEvent } from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";
import { CreateIdeaButton } from ".";
import { render, screen } from "../../utils/test-utils";

const context = {
  ideas: [],
  setIdeas: () => {},
  createIdea: () => {},
  deleteIdea: () => {},
  updateIdea: () => {},
};

describe("CreateIdeaButton component", () => {
  test("should render", () => {
    render(<CreateIdeaButton />, context);
    const button = screen.getByText("Create idea");
    expect(button).toBeDefined();
  });

  test("shoud handle createIdea function", async () => {
    const createIdea = vi.fn();

    render(<CreateIdeaButton />, { ...context, createIdea });

    const button = screen.getByText("Create idea");

    await userEvent.click(button);

    expect(createIdea).toHaveBeenCalled();
  });
});
