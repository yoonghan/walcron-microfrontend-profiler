import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Root from "./Root";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Root", () => {
  it("should render child in outlet correctly", () => {
    render(
      <MemoryRouter initialEntries={["/root/about"]}>
        <Routes>
          <Route path="/root" element={<Root />}>
            <Route path="/outlet">
              <div>Within Outlet</div>
            </Route>
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Within Outlet")).toBeInTheDocument();
  });
});
