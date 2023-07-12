import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const NavigatorListener = ({
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

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(`[${appName}] navigated`, { detail: location.pathname })
    );
  }, [appName, location]);

  // useEffect(() => {
  //   const stateLocation =
  //     location.pathname === "/" ? baseUrl : `${baseUrl}${location.pathname}`;
  //   if (skipPath !== stateLocation) history.pushState({}, "", stateLocation);
  // }, [location.pathname, skipPath]);

  useEffect(() => {
    function shellNavigationHandler(event: Event) {
      const pathname = (event as CustomEvent<string>).detail;
      //matchRoutes(routes(), { pathname }) not usable
      if (location.pathname === pathname) {
        return;
      }
      navigate(pathname);
    }

    window.addEventListener(
      `[${containerName}] navigated`,
      shellNavigationHandler
    );

    return () => {
      window.removeEventListener(
        `[${containerName}] navigated`,
        shellNavigationHandler
      );
    };
  }, [containerName, location.pathname, navigate]);

  return children;
};
