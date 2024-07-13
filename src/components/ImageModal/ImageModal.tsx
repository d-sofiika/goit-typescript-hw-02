import Modal from 'react-modal';
import css from "./imageModal.module.css"
import { IoIosCloseCircleOutline } from "react-icons/io";
import React from 'react';
Modal.setAppElement('#root'); 

type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
  likes: number;
  alt_description:string
}
const ImageModal:React.FC<ImageModalProps> = ({ isOpen, onRequestClose, imageUrl, likes, alt_description}) => {
 const capitalizeFirstLetter = (text:string) => {
    if (text.length === 0) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
 
    return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeBtn} onClick={onRequestClose}><IoIosCloseCircleOutline size={20} /></button>
          {imageUrl && (
        <img src={imageUrl} alt="Large view" className={css.image} />
            )}
            <div className={css.dscrContainer}>
          <p className={css.dscr}><span className={css.dscrWrap}>Title:</span> {capitalizeFirstLetter(alt_description)}</p>
          <p className={css.dscr}><span className={css.dscrWrap}>Likes:</span> {likes}</p>
          
          </div>
    </Modal>
  );
};

export default ImageModal