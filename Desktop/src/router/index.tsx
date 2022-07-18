import { BrowserRouter, Routes } from "react-router-dom";
import { RouteRender } from "../helpers/routerHelper";
import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import AuthticatedPages from "../pages/AuthenticatedPages";
import DefaultPages from "../pages/DefaultPages";

const Router = () => {
  const { isAuthenticated } = useAuth0();

  const routerLogic = isAuthenticated
    ? RouteRender(AuthticatedPages)
    : RouteRender(DefaultPages);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes children={routerLogic} />
    </BrowserRouter>
  );
};

export default Router;
