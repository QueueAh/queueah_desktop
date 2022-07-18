import { useReducer } from "react";
// COMPONENTS
import ModalContent from "./component/ModalContent";
// CSS
import "./SiteModal.css";
// PROPS
import { ModalComponent } from "./SiteModalProps";

const SiteModal = (props: ModalComponent) => {
  const { component, content, type } = props;

  // toggle detirmines if modal is display or not. Intital state is false.
  const [displayModal, toggle] = useReducer(
    (displayModal) => !displayModal,
    false
  );

  const modalContent = (
    <ModalContent click={toggle} type={type} content={content} />
  );

  return (
    <>
      <div onClick={toggle}>{component}</div>
      {displayModal && modalContent}
    </>
  );
};

export default SiteModal;
