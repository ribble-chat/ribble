import styles from "./CenterPopup.module.scss";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { modalContentAtom } from "state";

type Props = {};

const CenterPopup: React.FC<Props> = () => {
  const [modalContent, setModalContent] = useRecoilState(modalContentAtom);

  return (
    <Modal
      isOpen={modalContent !== undefined}
      onRequestClose={() => setModalContent(undefined)}
      overlayClassName={styles.popupOverlay}
      className={styles.popupContent}
      shouldCloseOnOverlayClick={false}
    >
      <button
        className={styles.closeButton}
        onClick={() => setModalContent(undefined)}
      >
        <i className="fas fa-times" />
      </button>
      <div className={styles.contentContainer}>{modalContent}</div>
    </Modal>
  );
};

export default CenterPopup;
