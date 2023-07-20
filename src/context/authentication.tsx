import { ReactNode, createContext, useState } from "react";

type Props = {
  isSignedIn: boolean;
  onSignIn: () => void;
  onSignOut: () => void;
};

export const defaultProps: Props = {
  isSignedIn: false,
  onSignIn: () => {
    //empty
  },
  onSignOut: () => {
    //empty
  },
};

const AuthenticationContext = createContext(defaultProps);

export const AuthenticationConsumer = AuthenticationContext.Consumer;

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <AuthenticationContext.Provider
      value={{
        isSignedIn: signedIn,
        onSignIn: () => {
          setSignedIn(true);
        },
        onSignOut: () => {
          setSignedIn(false);
        },
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
