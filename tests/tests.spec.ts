import { expect, test } from "@playwright/test";

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
  await inputTitle.fill("Idea name");

  const updateButton = page.getByText("Update");

  await updateButton.click();

  await expect(inputTitle).toHaveValue("Idea name");

  const deleteIdeaButton = page.getByText("x");

  await deleteIdeaButton.click();

  expect(emptyPageMessage).toContainText("You haven't added any ideas yet.");
});

test("user sorts idea tiles", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await page.evaluate(() =>
    window.localStorage.setItem(
      "ideas",
      JSON.stringify([
        {
          id: "409c986f-3d51-49de-9ef9-d65b8cb4fa9e",
          title: "Carrot",
          description: "",
          timestamp: 1724324794230,
          updated: true,
        },
        {
          id: "eedf0491-a44c-43b7-97b1-33e5e9a97fe9",
          title: "Banana",
          description: "",
          timestamp: 1724324788349,
          updated: true,
        },
        {
          id: "df607c42-cd60-47f5-bfb5-73138384485e",
          title: "Apple",
          description: "",
          timestamp: 1724324783974,
          updated: true,
        },
      ]),
    ),
  );

  await page.reload();

  const sortingSelector = page.getByLabel("sort");

  await sortingSelector.selectOption("AZ");

  const inputTitleFirstIdeaTile = page
    .getByRole("article")
    .first()
    .getByPlaceholder("e.g. Idea proposal");

  await expect(inputTitleFirstIdeaTile).toHaveValue("Apple");
});
