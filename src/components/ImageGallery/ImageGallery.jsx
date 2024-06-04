import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";


const ImageGallery = ({ images }) => {
  if (!images.length) {
    return null;
  }

  return (
    <ul className={css.imageGallery}>
      {images.map((image, index) => (
        <li key={index} className={css.imageGalleryItem}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;



