import { Typography } from "@mui/material";
import { useEffect } from "react";

const SignOut = ({ onSignOut }: { onSignOut: () => void }) => {
  useEffect(() => {
    onSignOut();
  }, [onSignOut]);

  return <Typography>Signing out</Typography>;
};

export default SignOut;
