import { HomeFilled } from "@ant-design/icons";
import { PagesProps } from "../papesProps";
import Home from "./Home";

const DefaultPages: PagesProps[] = [
  {
    key: "home",
    path: "/",
    element: <Home />,
    icon: <HomeFilled />
  }
];

export default DefaultPages;
