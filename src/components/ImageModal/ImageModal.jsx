import Modal from "react-modal";

import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image, likes, author }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
      closeTimeoutMS={300}
    >
      <div className={css.content} onClick={onClose}>
        <img
          src={image.urls.regular}
          alt={image.alt_description || "Large view"}
          className={css.image}
        />
       
        <div className={css.descr}>
          <p className={css.infoText}>
            Likes:{likes}
          </p>
          <p className={css.descr}>
           Author: {author}
          </p>
        </div>
      </div>
    </Modal>
  );
};


export default ImageModal