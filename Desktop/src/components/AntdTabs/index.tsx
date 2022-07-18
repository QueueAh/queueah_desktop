import { Tabs } from "antd";
// CSS
import "./AntdTabs.css";
import "antd/dist/antd.css";
// PROPS
import { AntdTabsProps } from "./AntdTabsProps";
// TOOLS

const AntdTabs = (props: AntdTabsProps) => {
  const { TabPane } = Tabs;
  const { data } = props;

  const renderTabs = data.map((tab) => {
    const { content, title } = tab;

    return (
      <TabPane key={title} tab={title}>
        {content}
      </TabPane>
    );
  });

  return (
    <div className="antd-tabs-container">
      <Tabs
        centered
        defaultActiveKey="0"
        size="large"
        tabPosition="top"
        type="card"
      >
        {renderTabs}
      </Tabs>
    </div>
  );
};

export default AntdTabs;
