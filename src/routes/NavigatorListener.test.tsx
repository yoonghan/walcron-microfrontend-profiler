import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import NavigatorListener from "./NavigatorListener";

describe("NavigatorListener", () => {
  const appName = "test-app";
  const containerName = "test-container";

  const Wrapper = ({ appListenerFn }: { appListenerFn: () => void }) => {
    window.addEventListener(`[${appName}] navigated`, appListenerFn);

    return (
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <NavigatorListener
                appName={appName}
                containerName={containerName}
              >
                <div>Root Container</div>
                <Outlet />
                <Link to="/child">Link to Child</Link>
              </NavigatorListener>
            }
          >
            <Route path="child" element={<div>Child Container</div>}></Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );
  };

  it("should render correctly", () => {
    render(<Wrapper appListenerFn={vi.fn()} />);
    expect(screen.getByText("Root Container")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Link to Child" })
    ).toBeInTheDocument();
  });

  it("should app is triggered upon load or navigation", async () => {
    const appListenerFn = vi.fn();
    render(<Wrapper appListenerFn={appListenerFn} />);
    expect(screen.getByText("Root Container")).toBeInTheDocument();
    expect(appListenerFn).toHaveBeenCalledWith(new CustomEvent(""));
    await userEvent.click(screen.getByRole("link", { name: "Link to Child" }));
    expect(appListenerFn).toHaveBeenCalledTimes(2);
    expect(screen.getByText("Child Container")).toBeInTheDocument();
  });

  it("should trigger container's event", async () => {
    render(<Wrapper appListenerFn={vi.fn()} />);
    expect(screen.getByText("Root Container")).toBeInTheDocument();
    window.dispatchEvent(
      new CustomEvent(`[${containerName}] navigated`, { detail: "/child" })
    );
    expect(await screen.findByText("Child Container")).toBeInTheDocument();
  });
});
