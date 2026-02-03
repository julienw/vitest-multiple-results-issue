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
});
