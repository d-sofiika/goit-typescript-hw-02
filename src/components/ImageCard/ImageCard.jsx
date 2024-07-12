import css from "./imageCard.module.css";

const ImageCard = ({ url, dscr, onImageClick }) => {
  const capitalizeFirstLetter = (text) => {
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
