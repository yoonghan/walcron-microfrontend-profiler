import { describe, it, expect } from "vitest";
import {
  AuthenticationConsumer,
  AuthenticationProvider,
  defaultProps,
} from "./authentication";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("authentication", () => {
  it("should have correct authentication defaults", () => {
    expect(defaultProps.isSignedIn).toBe(false);
    defaultProps.onSignIn();
    defaultProps.onSignOut();
  });

  describe("provider", () => {
    it("should authenticate properly", async () => {
      render(
        <AuthenticationProvider>
          <AuthenticationConsumer>
            {({ isSignedIn, onSignIn, onSignOut }) => (
              <>
                <div>
                  <span>Is SignedIn: {isSignedIn ? "true" : "false"}</span>
                </div>
                <button onClick={onSignIn}>Sign In</button>
                <button onClick={onSignOut}>Sign Out</button>
              </>
            )}
          </AuthenticationConsumer>
        </AuthenticationProvider>
      );

      expect(screen.getByText("Is SignedIn: false")).toBeInTheDocument();
      await userEvent.click(screen.getByRole("button", { name: "Sign In" }));
      expect(screen.getByText("Is SignedIn: true")).toBeInTheDocument();
      await userEvent.click(screen.getByRole("button", { name: "Sign Out" }));
      expect(screen.getByText("Is SignedIn: false")).toBeInTheDocument();
    });
  });
});
