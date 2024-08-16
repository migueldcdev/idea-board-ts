import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveTitle("Idea Board");
});

test("page is empty", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const emptyPageMessage = page.getByRole("paragraph");

  await expect(emptyPageMessage).toContainText(
    "You haven't added any ideas yet.",
  );
});

test("creates idea tile", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const createIdeaButton = page.getByTestId("create-button");

  await createIdeaButton.click();

  const ideaTile = page.getByTestId("tile");

  await expect(ideaTile).toBeVisible();
});

test("shows creation date", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  const createIdeaButton = page.getByTestId("create-button");

  await createIdeaButton.click();

  const ideaTile = page.getByTestId("tile");

  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/;

  expect(ideaTile).toContainText(new RegExp(`Created ${dateRegex.source}`));
});

test("shows update button after adding name", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const createIdeaButton = page.getByTestId("create-button");

  await createIdeaButton.click();

  const inputTitle = page.getByTestId("input-name");

  await inputTitle.fill("Idea name...");

  const updateButton = page.getByTestId("update-button");

  expect(updateButton).toBeVisible();
});

test("shows update button after adding description", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const createIdeaButton = page.getByTestId("create-button");

  await createIdeaButton.click();

  const inputDescription = page.getByTestId("input-description");

  await inputDescription.fill("Idea description...");

  const updateButton = page.getByTestId("update-button");

  expect(updateButton).toBeVisible();
});

test("deletes tile", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const createIdeaButton = page.getByTestId("create-button");

  await createIdeaButton.click();

  const ideaTile = page.getByTestId("tile");

  const deleteButton = ideaTile.getByText("x");

  deleteButton.click();

  expect(ideaTile).toBeHidden();
});
