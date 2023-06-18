import Button from ".";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("should render button component correctly", () => {
    render(<Button />);
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("I am a Button")).toBeInTheDocument();
  });

  it("should render button component correctly", async () => {
    render(<Button />);
    await userEvent.click(screen.getByText("I am a Button"));
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
