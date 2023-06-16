import SignIn from ".";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SignIn", () => {
  it("should render login component correctly", () => {
    render(<SignIn />);
    expect(screen.getByText("Sign in")).toBeInTheDocument();

    expect(screen.getByLabelText("Email Address *")).toBeInTheDocument();
    expect(screen.getByLabelText("Password *")).toBeInTheDocument();

    expect(
      screen.getByRole("checkbox", { name: "Remember me" })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Forgot password?" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Don't have an account? Sign Up" })
    ).toBeInTheDocument();

    expect(screen.getByText(/^Copyright ©.*2023\.$/)).toBeInTheDocument();
  });

  it("should be able to click on submit", async () => {
    render(<SignIn />);
    await userEvent.click(screen.getByRole("button", { name: "Sign In" }));
  });
});
