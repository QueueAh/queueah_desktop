// COMPONENT
import SiteCloseButton from "./SiteCloseButton";
// CSS
import "../SiteModal.css";
// PROPS
import { modalContentProps } from "../SiteModalProps";

const SiteModalContent = (props: modalContentProps) => {
  const { click, content, type } = props;

  // Close Button for Modal
  const closeButton = <SiteCloseButton click={click} type={type} />;

  // Contents for a modal with a white background
  const modalContent = (
    <div className="modal-container">
      {closeButton}
      <div className="modal-container-content">{content}</div>
    </div>
  );

  // Contents for a blank modal with no background
  const modalBlankContent = (
    <>
      {closeButton}
      {content}
    </>
  );

  // Renders type of modal depending on type prop
  const modalLogic = type === "blank" ? modalBlankContent : modalContent;

  return <div className="modal-component w-100">{modalLogic}</div>;
};

export default SiteModalContent;
