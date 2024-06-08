import { useState,  useEffect } from "react"
// import css from "./App.css"

import getImages from "../unsplash-api"
import ErrorMessage    from "../ErrorMassage/ErrorMessage"
import ImageModal from "../ImageModal/ImageModal"
import Loader from "../Loader/Loader"
import ImageGallery from "../ImageGallery/ImageGallery"
import LoaderMore from "../LoaderMore/LoaderMore"
import SearchBar from "../SearchBar/SearchBar"


const App = () => {

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [isLoader, setIsLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [searchImg, setSearchImg] = useState("");
    const [selectedImg, setSelectedImg] = useState(null);

    // const loaderMoreBtnRef = useRef(null);



    useEffect(() => {
        if (!searchImg) return;
        setIsLoader(true);
        getImages(searchImg, page)

            .then(({ results }) => {
                setImages((prevImages) => [...prevImages, ...results]);
                setIsLoader(false);
            }).catch((error) => {
                setError(error.message);
                setIsLoader(false);
            })
    }, [searchImg, page]);


    const handleSearch = (query) => {
        setSearchImg(query);
        setPage(1);
        setImages([]);
}


    const handleLoaderMore = () => {
        setPage((prevPage) => prevPage + 1);
    }

    const handleImgClick = (image) => {
        setSelectedImg(image);
        setShowModal(true);
    }

    const closeModal = () => {
        setSelectedImg(null);
        setShowModal(false);
    }




  return (
    <div>
      <h1>Image Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage massage={error} />}
      <ImageGallery images={images} onImageClick={handleImgClick} />
      {isLoader && <Loader />}
      {images.length > 0 && !isLoader && (
        <LoaderMore onClick={handleLoaderMore} />
        //   ref={loaderMoreBtnRef}
      )}
      {showModal && (
        <ImageModal
          isOpen={showModal}
          image={selectedImg}
          onClose={closeModal}
          description={selectedImg.alt_description}
          likes={selectedImg.likes}
          author={selectedImg.user.name}
        />
      )}
    </div>
  );
}

export default App