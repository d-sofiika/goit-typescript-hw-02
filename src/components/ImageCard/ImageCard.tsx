import css from "./imageCard.module.css";
import React from 'react';


const ImageCard:React.FC<ImageCardProps> = ({ url, dscr, onImageClick }) => {
  const capitalizeFirstLetter = (text:string) => {
    if (text.length === 0) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  return (
    <div>
      <img
        className={css.img}
        src={url}
        alt={dscr}
        onClick={ onImageClick }
      />
      <p className={css.dscr}>{capitalizeFirstLetter(dscr)}</p>
    </div>
  );
};

export default ImageCard;
