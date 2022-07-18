// PROPS
import { CloseOutlined } from "@ant-design/icons";
import { closeButtonProps } from "../SiteModalProps";
// TOOLS

const SiteCloseButton = (props: closeButtonProps) => {
  // PROPS
  const { click, type } = props;

  return (
    <div className={`${type}-close cursor-pointer`} onClick={click}>
      <CloseOutlined />
    </div>
  );
};

export default SiteCloseButton;
