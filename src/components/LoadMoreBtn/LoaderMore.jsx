import css from "./LoaderMore.module.css"

const LoaderMore = ({ onClick }) => {
  return (
    <button className={css.loadMoreBtn} onClick={onClick}>Load More</button>
  )
}

export default LoaderMore

