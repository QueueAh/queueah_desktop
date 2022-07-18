import { List, Avatar } from "antd";
import { SingleListProps } from "./AntdListProps";

const SingleList = (props: { data: SingleListProps }) => {
  const { avatar, title, description, content } = props.data;
  const { Item } = List;
  const { Meta } = Item;
  return (
    <Item
      extra={
        <img
          width={272}
          alt="logo"
          src={
            "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          }
        />
      }
    >
      <Meta
        avatar={<Avatar src={avatar} />}
        title={title}
        description={description}
      />
      {content}
    </Item>
  );
};

export default SingleList;
