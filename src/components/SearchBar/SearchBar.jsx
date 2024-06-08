import css from "./SearchBar.module.css"
import { FcSearch } from "react-icons/fc";

import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.searchimage.value.trim();
    query === ""
      ? toast.error("Oops! It looks like you forgot to enter a search term.")
      : onSearch(query);
    e.target.reset();
  };
  return (
    <header className={css.search}>
      <form onSubmit={handleSubmit}>
        <input className={css.inputSearch}
          name = "searchimage"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit"><FcSearch/> Search</button>
      </form>
      <Toaster position="top-center" />
    </header>
  );
};

export default SearchBar;

// const message = () => toast("Here is your toast.");
