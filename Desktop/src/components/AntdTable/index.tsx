import { Table } from "antd";
import { AntdTableColumns } from "./AntdTableColumns";
import "./AntdTableStyles.css";

interface AntTableProps {
  data: readonly { gender: string }[] | undefined;
}

const AntdTable = (props: AntTableProps) => {
  return (
    <div className="antd-table">
      <Table
        dataSource={props.data}
        columns={AntdTableColumns()}
        pagination={false}
        sticky
      />
    </div>
  );
};

export default AntdTable;
