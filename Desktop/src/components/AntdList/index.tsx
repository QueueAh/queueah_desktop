import { List } from "antd";
import { AntdListProps } from "./AntdListProps";
import SingleList from "./SingleList";

const AntdList = (props: AntdListProps) => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={props.data}
    renderItem={(item) => <SingleList data={item} />}
  />
);

export default AntdList;
