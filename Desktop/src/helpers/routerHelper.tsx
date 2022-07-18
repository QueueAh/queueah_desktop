import { Route } from "react-router-dom";

export const RouteRender = (data: any[]) =>
  data.map((page) => <Route {...page} />);
