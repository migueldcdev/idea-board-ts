import { beforeEach, describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CreateIdeaButton from ".";
import { ideasContext } from "../../context/ideasContext";

describe("Create idea button test", () => {
  const mockIdeas: any = [];
  const setIdeas = vi.fn();

  beforeEach(() => {
    render(
      <ideasContext.Provider value={{ ideas: mockIdeas, setIdeas }}>
        <CreateIdeaButton />
      </ideasContext.Provider>,
    );
  });

  test("Should be able to call function when clicked", () => {
    const button = screen.getByTestId("create-button");

    fireEvent.click(button);

    expect(setIdeas).toHaveBeenCalledTimes(1);
  });

  //what other tests can i add? Should I try integration tests here? When I should test and when I should not?
});
