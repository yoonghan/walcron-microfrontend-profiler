import Profile from ".";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Profile", () => {
  it("should render login component correctly", () => {
    render(<Profile />);
    expect(screen.getByText("Logged in")).toBeInTheDocument();

    expect(screen.getByLabelText("First Name *")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name *")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "65 - Singapore" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Phone *")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Update" })).toBeInTheDocument();
  });
});
