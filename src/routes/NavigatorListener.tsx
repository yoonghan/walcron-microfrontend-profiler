import { useNavigationListener } from "@yoonghan/walcron-microfrontend-shared";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigatorListener = ({
  children,
  appName,
  containerName,
}: {
  children: ReactNode;
  appName: string;
  containerName: string;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useNavigationListener({
    appName,
    containerName,
    props: {
      pathname: location.pathname,
      navigate,
    },
  });

  return children;
};

export default NavigatorListener;
