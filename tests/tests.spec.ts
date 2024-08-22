import { test, expect } from "@playwright/test";

test("user creates, updates and deletes idea", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(page).toHaveTitle("Idea Board");

  const emptyPageMessage = page.getByRole("paragraph");

  expect(emptyPageMessage).toContainText("You haven't added any ideas yet.");

  const createIdeaButton = page.getByText("Create idea");

  await createIdeaButton.click();

  const ideaTile = page.getByRole("article");

  await expect(ideaTile).toBeVisible();

  const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/;

  expect(ideaTile).toContainText(new RegExp(`Created ${dateRegex.source}`));

  const inputTitle = page.getByPlaceholder("e.g. Idea proposal");
  await inputTitle.fill("Idea name...");

  const updateButton = page.getByText("Update");

  await updateButton.click();

  await expect(inputTitle).toHaveValue("Idea name...");

  const deleteIdeaButton = page.getByText("x");

  await deleteIdeaButton.click();

  expect(emptyPageMessage).toContainText("You haven't added any ideas yet.");
});
