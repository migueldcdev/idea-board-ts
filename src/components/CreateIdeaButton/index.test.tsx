import { test, describe, expect, vi } from "vitest";
import { fireEvent } from "../../utils/test-utils";
import { render } from "../../utils/test-utils";
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
    const { container } = render(<CreateIdeaButton />, context);
    const button = container.getElementsByClassName("cursor-pointer");
    expect(button.length).toBeGreaterThan(0);
  });

  test("shoud handle createIdea function", () => {
    const { container } = render(<CreateIdeaButton />, context);
    const button = container.getElementsByClassName("cursor-pointer")[0];

    fireEvent.click(button);

    expect(context.createIdea).toHaveBeenCalled();
  });
});
