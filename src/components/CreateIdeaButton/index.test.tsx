import { test, describe, expect, vi } from "vitest";
import { render, screen } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import { CreateIdeaButton } from ".";

const context = {
  ideas: [],
  setIdeas: () => {},
  createIdea: vi.fn(),
  deleteIdea: () => {},
  updateIdea: () => {},
};

describe("CreateIdeaButton component", () => {
  test("should render", () => {
    render(<CreateIdeaButton />, context);
    const button = screen.getAllByTestId("create-button");
    expect(button.length).toBeGreaterThan(0);
  });

  test("shoud handle createIdea function", () => {
    render(<CreateIdeaButton />, context);
    const button = screen.getAllByTestId("create-button")[0];

    userEvent.click(button);

    expect(context.createIdea).toHaveBeenCalled();
  });
});
