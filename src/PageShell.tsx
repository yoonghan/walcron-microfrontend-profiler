import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import { Link } from "./Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export { PageShell };

const defaultTheme = createTheme();

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <ThemeProvider theme={defaultTheme}>
          <Layout>
            <Sidebar>
              <Link className="navitem" href="/">
                Home
              </Link>
              <Link className="navitem" href="/signin">
                SignIn
              </Link>
            </Sidebar>
            <Content>{children}</Content>
          </Layout>
        </ThemeProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
