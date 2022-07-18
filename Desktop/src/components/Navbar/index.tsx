import { useAuth0 } from "@auth0/auth0-react";
import { Menu } from "antd";
import authenticatedMenu from "./authenicatedMenu";
import LogButton from "./authenicationButton";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();


  const authLogic = () => {
    if (isAuthenticated) {
      return authenticatedMenu;
    }
  };

  return (
    <Menu mode="horizontal" theme="dark">
      {authLogic()}
      <LogButton />
    </Menu>
  );
};

export default Navbar;
