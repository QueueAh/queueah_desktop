import Menu from "antd/lib/menu";
import { Link } from "react-router-dom";
import DefaultPages from "pages/DefaultPages";

const defaultMenu = DefaultPages.map((page) => {
  const { key, path, icon } = page;
  const { Item } = Menu;

  return (
    <Item key={key} icon={icon}>
      <Link to={path}>{key}</Link>
    </Item>
  );
});

export default defaultMenu;
