import { Container, Typography } from "@mui/material";
import packageJson from "../../package.json";

const About = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1">About</Typography>
      <Typography component="p">
        This site is used for user up-keep and authentication.
      </Typography>

      <Typography align="center">
        Version<span>{packageJson.version}</span>
      </Typography>
    </Container>
  );
};

export default About;
