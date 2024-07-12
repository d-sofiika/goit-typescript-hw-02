import ImageCard from "../ImageCard/ImageCard";
import css from "./imageGallery.module.css"

const ImageGallery = ({ images, onImageClick}) => {
  return (
    <ul className={css.listGallery} >
          {images.map((img) => (
          
            <li className={css.item} key={img.id}>
              <ImageCard url={img.urls.small} dscr={img.alt_description
              } onImageClick={() => onImageClick(img.urls.regular, img.likes, img.alt_description)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
