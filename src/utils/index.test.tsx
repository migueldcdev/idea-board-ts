import { describe, expect, test } from "vitest";
import unixToDate from ".";

describe("Utils test", () => {
  test("properly converts unix to redable date", () => {
    expect(unixToDate(1723030052971)).toBe("7/8/2024");
  });
});
