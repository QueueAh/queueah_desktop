import { useAuth0 } from "@auth0/auth0-react";
import Menu from "antd/lib/menu";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";

const LogButton = () => {
  const { Item } = Menu;
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

  const ItemProps = {
    icon: isAuthenticated ? <LogoutOutlined /> : <LoginOutlined />,
    key: "authenication-button",
    style: { marginLeft: "auto" },
  };

  const clickLogic = () =>
    isAuthenticated
      ? logout({ returnTo: "http://127.0.0.1:3000/" })
      : loginWithRedirect();

  return (
    <Item {...ItemProps} onClick={clickLogic}>
      Log {isAuthenticated ? "out" : "in"}
    </Item>
  );
};

export default LogButton;
