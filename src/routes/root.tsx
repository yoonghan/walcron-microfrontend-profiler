import { Outlet } from "react-router-dom";
import defaultTheme from "../components/style/theme";
import { ThemeProvider, Typography, Link } from "@mui/material";

export default function Root() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div id="sidebar">
        <Typography variant="h1" component="h2">
          Navigation
        </Typography>
        <nav>
          <ul>
            <li>
              <Link href={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link href={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
