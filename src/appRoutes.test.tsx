import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "./appRoutes";

describe("appRoutes", () => {
  const Wrapper = ({ goto }: { goto: string[] }) => {
    const router = createMemoryRouter(
      [
        routes({
          props: {
            onSignIn: vi.fn(),
            onSignOut: vi.fn(),
          },
        }),
      ],
      { initialEntries: goto }
    );
    return <RouterProvider router={router} />;
  };

  it("should show exception when the route is not valid", () => {
    render(<Wrapper goto={["/isnotvalid"]} />);
    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });

  it("should show be able to navigate to root", () => {
    render(<Wrapper goto={["/"]} />);
    expect(screen.queryByText("Not Found")).not.toBeInTheDocument();
  });

  it("should show be able to navigate to /about", () => {
    render(<Wrapper goto={["/about"]} />);
    expect(screen.queryByText("Not Found")).not.toBeInTheDocument();
  });

  it("should show be able to navigate to /auth", () => {
    render(<Wrapper goto={["/auth/login"]} />);
    expect(screen.queryByText("Not Found")).not.toBeInTheDocument();
  });

  it("should show be able to navigate to /auth/login", () => {
    render(<Wrapper goto={["/auth/login"]} />);
    expect(screen.queryByText("Not Found")).not.toBeInTheDocument();
  });

  it("should show be able to navigate to /auth/logout", () => {
    render(<Wrapper goto={["/auth/logout"]} />);
    expect(screen.queryByText("Not Found")).not.toBeInTheDocument();
  });
});
