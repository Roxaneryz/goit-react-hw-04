import css from "./ImageCard.module.css"

// const ImageCard = ({ src, alt }) => (
//   <div>
//     <img src={src} alt={alt} />
//   </div>
// );


const ImageCard = ({ image }) => {
  const { urls, alt_description, user, likes } = image;

  return (
    <div className={css.imageCard}>
      <img src={urls.small} alt={alt_description || "Image"} />
          <div className={css.imageItem}>
        <p>Author: {user.name}</p>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
};


export default ImageCard