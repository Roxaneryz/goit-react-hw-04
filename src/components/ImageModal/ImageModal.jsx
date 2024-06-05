import Modal from "react-modal";

import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <div className={css.content} onClick={onClose}>
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Large view"}
          className={css.image}
        />
      </div>
    </Modal>
  );
};


export default ImageModal