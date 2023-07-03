import SignOut from ".";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

describe("SignOut", () => {
  it("should render logout component correctly", () => {
    const onSignOutFn = vi.fn();
    render(<SignOut onSignOut={onSignOutFn} />);

    expect(screen.getByText("Signing out")).toBeInTheDocument();
    expect(onSignOutFn).toHaveBeenCalledOnce();
  });
});
