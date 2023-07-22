import SignOut from ".";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("SignOut", () => {
  it("should render logout component correctly", () => {
    const onSignOutFn = vi.fn();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={<SignOut onSignOut={onSignOutFn} redirect="/auth/login" />}
          ></Route>
          <Route path="/auth/login" element={<div>Login</div>}></Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(onSignOutFn).toHaveBeenCalledOnce();
  });

  it("should stay in signout page if redirect triggers itself", () => {
    const onSignOutFn = vi.fn();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <SignOut onSignOut={onSignOutFn} redirect="/auth/logout" />
            }
          ></Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Signing out")).toBeInTheDocument();
    expect(onSignOutFn).toHaveBeenCalledOnce();
  });
});
