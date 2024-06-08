import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";


const ImageGallery = ({ images, onImageClick }) => {
  if (!images.length) {
    return null;
  }

  return (
    <ul className={css.imageGallery}>
      {images.map((image, index) => (
        <li
          key={index}
          className={css.imageGalleryItem}
          onClick={() => onImageClick(image)}
        >
          <ImageCard className={css.imagecard} image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;



