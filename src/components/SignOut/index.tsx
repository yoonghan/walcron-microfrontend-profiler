import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const SignOut = ({
  onSignOut,
  redirect,
}: {
  onSignOut: () => void;
  redirect: string;
}) => {
  useEffect(() => {
    onSignOut();
  }, [onSignOut]);

  return (
    <>
      <Navigate to={redirect} replace={true} />
    </>
  );
};

export default SignOut;
