import { describe, expect, test } from "vitest";
import { unixToDate } from ".";

describe("Utils test", () => {
  test.each([
    [1723030052971, "7/8/2024"],
    [0, "1/1/1970"],
    [-56, "1/1/1970"],
  ])("properly converts unix to redable date", (unix, expected) => {
    expect(unixToDate(unix)).toBe(expected);
  });
});
