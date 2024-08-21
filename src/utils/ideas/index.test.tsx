import { describe, test, expect, expectTypeOf } from "vitest";

import { sortIdeas } from ".";

import { Idea } from "../../types";

const ideas: Idea[] = [
  {
    id: "a8710270-9b41-4feb-bd7e-f91bd698cc5c",
    title: "apple",
    description: "",
    timestamp: 1723553451408, //August 13
    updated: true,
  },
  {
    id: "8e3cf683-3068-4aaa-aee3-0d3c76805633",
    title: "banana",
    description: "",
    timestamp: 1723635312000, //August 14
    updated: true,
  },
  {
    id: "2df93c32-83d5-4ad1-93e0-eba6600fdd02",
    title: "carrot",
    description: "",
    timestamp: 1724240112000, //August 21
    updated: true,
  },
];

describe("sorIdeas function tests", () => {
  test("It should be defined", () => {
    expect(sortIdeas).toBeDefined();
  });

  test("It should return an array", () => {
    const sortedIdeas = sortIdeas("Newest", ideas);
    expectTypeOf(sortedIdeas).toBeArray();
  });

  test("It should sort by date descending", () => {
    const sortedIdeas = sortIdeas("Newest", ideas);
    const firstArraryElement = sortedIdeas[0];
    expect(firstArraryElement).toStrictEqual({
      id: "2df93c32-83d5-4ad1-93e0-eba6600fdd02",
      title: "carrot",
      description: "",
      timestamp: 1724240112000, //August 21
      updated: true,
    });
  });

  test("It should sort by date ascending", () => {
    const sortedIdeas = sortIdeas("Oldest", ideas);
    const firstArraryElement = sortedIdeas[0];
    expect(firstArraryElement).toStrictEqual({
      id: "a8710270-9b41-4feb-bd7e-f91bd698cc5c",
      title: "apple",
      description: "",
      timestamp: 1723553451408, //August 13
      updated: true,
    });
  });

  test("It should sort alphabetically A to Z", () => {
    const sortedIdeas = sortIdeas("AZ", ideas);
    const firstArraryElement = sortedIdeas[0];
    expect(firstArraryElement).toStrictEqual({
      id: "a8710270-9b41-4feb-bd7e-f91bd698cc5c",
      title: "apple",
      description: "",
      timestamp: 1723553451408,
      updated: true,
    });
  });

  test("It should sort alphabetically Z to A", () => {
    const sortedIdeas = sortIdeas("ZA", ideas);
    const firstArraryElement = sortedIdeas[0];
    expect(firstArraryElement).toStrictEqual({
      id: "2df93c32-83d5-4ad1-93e0-eba6600fdd02",
      title: "carrot",
      description: "",
      timestamp: 1724240112000, //August 21
      updated: true,
    });
  });
});
