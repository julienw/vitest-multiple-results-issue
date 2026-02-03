import { describe, it, expect } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-react";
import App from "../src/App.jsx";

describe("Dialog Input Issue", () => {
  it("should error when using a locator finding more than 1 element", async () => {
    await render(<App />);
    await expect(
      async () => await page.getByRole("button").element(),
    ).rejects.toThrowError();
  });

  it("should error when using a locator finding more than 1 element and clicking it", async () => {
    await render(<App />);
    await expect(
      async () => await page.getByRole("button").click(),
    ).rejects.toThrowError();
  });

  it("should fill input in dialog 1 using getByRole", async () => {
    await render(<App />);

    // Click the "Open Dialog 2" button
    const openButton = page.getByRole("button", { name: /open dialog 1/i });
    await openButton.click();

    // Try to get the input using getByRole
    const input = page.getByRole("textbox");

    // Fill the input
    await input.fill("Test input");

    // Verify the input was filled
    await expect.element(input).toHaveValue("Test input");
    await page.getByRole("button", { name: "OK" }).click();
  });

  it("should fill input in dialog 2 using getByRole", async () => {
    await render(<App />);

    // Click the "Open Dialog 2" button
    const openButton = page.getByRole("button", { name: /open dialog 2/i });
    await openButton.click();

    // Try to get the input using getByRole
    const input = page.getByRole("textbox");

    // Fill the input
    await input.fill("Test input");

    // Verify the input was filled
    await expect.element(input).toHaveValue("Test input");
    await page.getByRole("button", { name: "OK" }).click();
  });
});
